import net from 'net';


// Method called on network errors
const onError = (err) => console.warn(err);

// Method to build a 'Command/Status Message'
const commandStatusMessage = (zone_code, id_code, value) => `*${zone_code}*${value}*${id_code}##`;

// Method to build a 'Request/Read/Write Dimension Message'
const requestMessage = (zone_code, id_code, dimension) => `*#${zone_code}*${id_code}*${dimension}##`;

// Converts an ACK message into a boolean
const isOn = (ack) => ack.toString() === '*#*1##' ? true : false;


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


export const readLight = (gateway, controller, callback) => {
  const { ip_address, port } = gateway;
  let client = net.connect(port, ip_address, () => {
    client.write(requestMessage(zone_code, id_code, 0));
  });

  client.on('data', (data) => {
    callback(isOn(data));
  });
}
