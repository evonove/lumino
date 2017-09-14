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


export const gatewayStatus = (dispatch, gateway) => {
  const client = net.connect(gateway.port, gateway.ip_address);
  client.on('error', () => dispatch({ type: 'GATEWAY_UNREACHABLE', gateway }));
  client.on('connect', () => dispatch({ type: 'GATEWAY_REACHABLE', gateway }));
};


export const lightStatus = (dispatch, controller, gateway) => {
  const { ip_address, port } = gateway;
  const { zoneCode, idCode } = controller;

  const client = net.connect(port, ip_address, () => {
    client.write(requestMessage(zoneCode, idCode));
  });

  client.on('data', (data) => {
    const dataString = data.toString();
    if (dataString !== ack) {
      const value = parseInt(dataString.split('*')[2], 10);
      dispatch({ type: 'READ_CONTROLLER', id: controller.id, value });
    }
  });
  client.on('error', onError);
};
