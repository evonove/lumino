import net from 'net';

export const change_light = (gateway, controller) => {
  let value = 0;
  if (controller.value === true) {
    value = 1;
  } else if (controller.value === false) {
    value = 0;
  } else {
    value = controller.value;
  }
  const command_string = '*' + controller.zone_code + '*' + value + '*' + controller.id_code + '##'
  let client = net.createConnection(gateway.port, gateway.ip_address, () => {
    client.write(command_string);
    client.end();
  });
}

export const read_light = (gateway, controller, callback) => {
  const command_string = '*#' +
    controller.zone_code +
    '*' +
    controller.id_code +
    '*0##';

  let client = net.createConnection(gateway.port, gateway.ip_address, () => {
    client.write(command_string);
  });

  client.on('data', (data) => {
    callback(parseInt(data.toString().replace(/\D/g,'')));
  });
}
