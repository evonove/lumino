import net from 'net';


// Method called on network errors
const onError = (err) => console.log(err);

// Method to build a 'Command/Status Message'
const commandStatusMessage = (zone_code, id_code, value) => `*${zone_code}*${value}*${id_code}##`;

// Method to build a 'Request/Read/Write Dimension Message'
const requestMessage = (zone_code, id_code) => `*#${zone_code}*${id_code}##`;

const ack = '*#*1##';

// Converts an ACK message into a boolean
const isOn = (ack) => ack.toString() === ack ? true : false;


export const changeLight = (gateway, controller) => {
  // Controller could send us a boolean, in which case
  // we transform it into either 1 or 0
  const { zone_code, id_code, value } = controller;
  const val = value === true ? 1 : value === false ? 0 : value;

  const { ip_address, port } = gateway;
  let client = net.connect(port, ip_address, () => {
    // Calling end with data is the same as calling client.write(data)
    // first and client.end() just after
    client.write(commandStatusMessage(zone_code, id_code, val));
    client.end();
  });
  client.on('error', onError);
}


export const gatewayStatus = (dispatch, gateway) => {
  const client = net.connect(gateway.port, gateway.ip_address);
  client.on('error', () => dispatch({ type: 'GATEWAY_UNREACHABLE', gateway}));
  client.on('connect', () => dispatch({ type: 'GATEWAY_REACHABLE', gateway}));
}


export const lightStatus = (dispatch, controller, gateway) => {
  const { ip_address, port } = gateway;
  const { zone_code, id_code } = controller;

  let client = net.connect(port, ip_address, () => {
    client.write(requestMessage(zone_code, id_code));
  });

  client.on('data', (data) => {
    data = data.toString();
    if (data !== ack) {
      const value = parseInt(data.split("*")[2]);
      dispatch({ type: 'READ_CONTROLLER', id: controller.id, value });
    }
  });
  client.on('error', onError);
}
