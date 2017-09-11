import net from 'net';

export const change_light = (gateway, controller) => {
  let value = 0;
  if (controller.value == true) {
    value = 1;
  } else if (controller.value == false) {
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
