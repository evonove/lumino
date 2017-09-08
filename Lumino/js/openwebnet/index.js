const net = require('net');

export const switch_light_on = (gateway, port, zone, id) => {
  const command_string = '*' + zone + '*1*' + id + '##';
  let client = net.createConnection(port, gateway, () => {
    client.write(command_string);
    client.end();
  });
}

export const switch_light_off = (gateway, port, zone, id) => {
  const command_string = '*' + zone + '*0*' + id + '##';
  let client = net.createConnection(port, gateway, () => {
    client.write(command_string);
    client.end();
  });
}
