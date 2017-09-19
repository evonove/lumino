import net from 'net';


/*
 *  GENERAL UTILITIES FUNCTIONS
 */

// Method called on network errors
const onError = err => console.log(err);

// Method to build a 'Command/Status Message'
const commandStatusMessage = (zoneCode, idCode, value) => `*${zoneCode}*${value}*${idCode}##`;

// Method to build a 'Request/Read/Write Dimension Message'
const requestMessage = (zoneCode, idCode) => `*#${zoneCode}*${idCode}##`;

// ack message
const ack = '*#*1##';


/*
 * GATEWAYS STUFF
 */

// On gateway connection, dispatch the action and ask for status
const onGatewayConnect = (dispatch, gateway, client) => {
  dispatch({
    type: 'GATEWAY_REACHABLE',
    gateway: { ...gateway, networkStatus: 'Reachable' }
  });
  gateway.client.write("*99*1##");
}


// On gateway close, dispatch the action deleting our destroyed client.
const onGatewayClose = (dispatch, gateway) => dispatch({
  type: 'GATEWAY_UNREACHABLE',
  gateway: {...gateway, client: undefined, networkStatus: 'Unreachable' },
});


// On error, destroy the client
const onGatewayError = (dispatch, gateway) => {
  if (gateway.client) gateway.client.destroy();
  dispatch({
    type: 'GATEWAY_UNREACHABLE',
    gateway: {...gateway, client: undefined, networkStatus: 'Unreachable' },
  });
};

export const gatewayStatus = (dispatch, gateway) => {
  if (gateway.client === undefined) {
    gateway.client = net.connect(gateway.port, gateway.ip_address);

    // On connect, asks for status
    gateway.client.on('connect', () => onGatewayConnect(dispatch, gateway))
    gateway.client.on('data', (data) => onServerData(data, gateway, dispatch));

    // Error handling
    gateway.client.on('error', () => onGatewayError(dispatch, gateway))
    gateway.client.on('close', () => onGatewayClose(dispatch, gateway));
  }
};


/*
 * CONTROLLER FUNCTIONS
 */

// Read light status
export const readLightStatus = (dispatch, controller, gateway) => {
  const client = net.connect(gateway.port, gateway.ip_address);

  client.on('connect', () => client.write(requestMessage(1, controller.idCode)));

  client.on('data', (data) => {
    onServerData(data, gateway, dispatch)
    client.end();
  });
  client.on('error', () => onGatewayError(dispatch, gateway));
}

// Set a given light to a certain value
export const changeLight = (gateway, controller, dispatch) => {
  // Controller could send us a boolean, in which case
  // we transform it into either 1 or 0
  const { idCode, value } = controller;
  let val = value;
  if (value === true) {
    val = 1;
  } else if (value === false) {
    val = 0;
  }

  const { ip_address, port } = gateway;

  const client = net.connect(port, ip_address)

  client.on('connect', () => {
    client.write(commandStatusMessage(1, idCode, val));
    client.destroy();
  });
  client.on('error', () => onGatewayError(dispatch, gateway));
};


const onServerData = (data, gateway, dispatch) => {
  const stringData = data.toString();
  if (stringData !== ack) {
    const splitted = stringData.split("*")
    dispatch({
      type: 'CONTROLLER_DATA',
      // splitted[0] is an empty string
      // splitted[1] represents the zoneCode
      zoneCode: splitted[1],
      // splitted[2] represents the value, but we want it as a number
      value: parseInt(splitted[2], 10),
      // splitted[3] represents the zoneCode, but we need
      // to strip the last two characters '##'
      idCode: splitted[3].slice(0, -2),
      gatewayId: gateway.id ,
    });
  }
}


