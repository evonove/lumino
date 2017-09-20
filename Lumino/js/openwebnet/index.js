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
const lightRequest = idCode => requestMessage(1, idCode);

// ack message
const ack = '*#*1##';


/*
 * GATEWAYS STUFF
 */

// On gateway connection, dispatch the action and ask for status
const onGatewayConnect = (dispatch, gateway, client) => {
  if (dispatch) {
    dispatch({ type: 'GATEWAY_REACHABLE', gateway });
    gateway.client.write("*99*1##");
  }
}


// On gateway close, dispatch the action deleting our destroyed client.
const onGatewayClose = (dispatch, gateway) => {
  if (dispatch) dispatch({ type: 'GATEWAY_UNREACHABLE', gateway });
}


// On error, destroy the client
const onGatewayError = (dispatch, gateway) => {
  if (gateway.client) gateway.client.destroy();
  if (dispatch) dispatch({ type: 'GATEWAY_UNREACHABLE', gateway });
};


// Match any string composed like '*1*{1-2 digits}*{1-4 digits}##'
const lightRegex = /\*1\*(\d{1,2})\*(\d{1,4})\#\#/;

// Method used on data received from server
const onServerData = (data, gateway, dispatch) => {
  const stringData = data.toString();
  if (stringData.match(lightRegex) && dispatch) {
    // Executing a regex will return an array
    // The first element is the whole string, the rest
    // are values matched inside parenthesis, so we slice
    // to delete the first element
    const [value, idCode] = lightRegex.exec(stringData).slice(1);
    dispatch({ value, idCode, type: 'CONTROLLER_DATA', zoneCode: 1, gatewayId: gateway.id });
  }
}

export const gatewayStatus = (dispatch, gateway, force=false) => {
  if (force && gateway.client !== undefined) {
    // If forced update we destroy the actual client without notifying about
    // unreachable network and force reconnection (that will instead notify
    // any failure
    gateway.client.destroy();
    gateway.client === undefined;
  }

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

  client.on('connect', () => client.write(lightRequest(controller.idCode)));

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
