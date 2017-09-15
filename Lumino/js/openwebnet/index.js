import net from 'net';


// Method called on network errors
const onError = err => console.log(err);

// Method to build a 'Command/Status Message'
const commandStatusMessage = (zoneCode, idCode, value) => `*${zoneCode}*${value}*${idCode}##`;

// Method to build a 'Request/Read/Write Dimension Message'
const requestMessage = (zoneCode, idCode) => `*#${zoneCode}*${idCode}##`;

const ack = '*#*1##';

export const changeLight = (gateway, controller) => {
  // Controller could send us a boolean, in which case
  // we transform it into either 1 or 0
  const { zoneCode, idCode, value } = controller;
  let val = value;
  if (value === true) {
    val = 1;
  } else if (value === false) {
    val = 0;
  }

  const { ip_address, port } = gateway;
  const client = net.connect(port, ip_address, () => {
    // Calling end with data is the same as calling client.write(data)
    // first and client.end() just after
    client.write(commandStatusMessage(zoneCode, idCode, val));
    client.end();
  });
  client.on('error', onError);
};


const onClientData = (data, gateway, dispatch) => {
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


export const gatewayStatus = (dispatch, gateway) => {
  const client = net.connect(gateway.port, gateway.ip_address);
  client.on('error', () => {
    dispatch({ type: 'GATEWAY_UNREACHABLE', gateway });
    setTimeout(() => gatewayStatus(dispatch, gateway), 2000);
    client.end();
  });

  client.on('connect', () => {
    dispatch({ type: 'GATEWAY_REACHABLE', gateway })
    client.write("*99*1##");
  });

  client.on('data', (data) => onClientData(data, gateway, dispatch));

  return client;
};


export const readLightStatus = (dispatch, controller, gateway) => {
  const client = net.connect(gateway.port, gateway.ip_address);

  client.on('connect', () => {
    client.write(`*#${controller.zoneCode}*${controller.idCode}##`)
  });

  client.on('data', (data) => {
    onClientData(data, gateway, dispatch)
    client.end();
  });
}
