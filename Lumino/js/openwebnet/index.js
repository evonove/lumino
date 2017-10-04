import net from 'net';


/*
 *  GENERAL UTILITIES FUNCTIONS
 */

// Method called on network errors
const onError = err => console.log(err);

// Methods to build 'Command/Status Messages'
const commandStatusMessage = (zoneCode, idCode, value) => `*${zoneCode}*${value}*${idCode}##`;
// const tempMessage = (idCode, pointTemp, heatingMode) => `*#4*${idCode}*#14*${pointTemp}*${heatingMode}##`;
// const modeMessage = (idCode, mode) => `*4*${mode}*#${idCode}##`;
const pointTempMessage = (idCode, pointTemp, heatingMode) => `*#4*#${idCode}*#14*${pointTemp}*3##`;

// Methods to build 'Request/Read/Write Dimension Message'
const lightRequest = idCode => `*#1*${idCode}##`
const tempRequest = idCode => `*#4*${idCode}*0##`;
const pointTempRequest = idCode => `*#4*${idCode}##`;
const tempModeRequest = idCode => `*#4*${idCode}*12##`;

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
const lightRegex = /^\*1\*(\d{1,2})\*(\d{1,4})\#\#$/;

// Match any string composed like '*#4*{1-2 digits}*0*{1-4 digits}##'
const tempRegex = /^\*\#4\*(\d{1,2})\*0\*(\d{1,4})\#\#/;

const tempModeRegex = /^\*4\*(\d{1,3})\*(\d{1,4})\#\#/;
const pointTempRegex = /^\*\#4\*(\d{1,3})\*12\*(\d{1,4})\*3\#\#/;

// Method used on data received from server
const onServerData = (data, gateway, dispatch) => {
  let value, idCode, zoneCode, heatingMode, action;
  const stringData = data.toString();
  if (stringData.match(lightRegex)) {
    // Executing a regex will return an array
    // The first element is the whole string, the rest
    // are values matched inside parenthesis, so we slice
    // to delete the first element
    [value, idCode] = lightRegex.exec(stringData).slice(1);
    zoneCode = 1
    action = { value, idCode, zoneCode, type: 'LIGHT_CONTROLLER_DATA', gatewayId: gateway.id };

  } else if (stringData.match(tempRegex)) {
    [idCode, value] = tempRegex.exec(stringData).slice(1);
    zoneCode = 4
    action = { value, idCode, zoneCode, type: 'TEMP_ACTUAL_TEMP_DATA', gatewayId: gateway.id };

  } else if (stringData.match(tempModeRegex)) {
    [heatingMode, idCode] = tempModeRegex.exec(stringData).slice(1);
    action = { value: heatingMode, idCode, zoneCode, type: 'TEMP_HEATING_MODE', gatewayId: gateway.id };

  } else if (stringData.match(pointTempRegex)) {
    [idCode, pointTemp] = pointTempRegex.exec(stringData).slice(1);
    action = { value: pointTemp, idCode, zoneCode, type: 'TEMP_POINT_TEMP', gatewayId: gateway.id };
  }

  if (action && dispatch) {
    dispatch(action);
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


// Read temp status
export const readTempStatus = (dispatch, controller, gateway) => {
  const client = net.connect(gateway.port, gateway.ip_address);

  client.on('connect', () => {
    client.write(tempRequest(controller.idCode));
    client.write(pointTempRequest(controller.idCode));
    client.write(tempModeRequest(controller.idCode));
    // Give some time to read data and then end the socket
    client.setTimeout(2000, client.end);
  });

  client.on('data', (data) => {
    onServerData(data, gateway, dispatch);
  });
  client.on('error', () => onGatewayError(dispatch, gateway));
}


// Set a given temperature controller to either conditioning or heating
export const writePointTemp = (gateway, controller, dispatch) => {
  const { idCode, pointTemp, heatingMode } = controller;
  const { ip_address, port } = gateway;
  const parsedHeatingMode = heatingMode ? 1 : 2;
  const parsedPointTemp = `0${pointTemp.toFixed(1).replace('.', '')}`;

  const client = net.connect(port, ip_address)

  client.on('connect', () => {
    client.write(pointTempMessage(idCode, parsedPointTemp, parsedHeatingMode));
    client.destroy();
  });
  client.on('error', () => onGatewayError(dispatch, gateway));
};
