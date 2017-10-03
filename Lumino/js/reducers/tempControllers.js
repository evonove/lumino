import uuid from 'react-native-uuid';
import { REHYDRATE } from 'redux-persist/constants'


// Helper method to extract gateway object from the global state
// c stands for Controller
const getGateway = (c, getState) => getState().gateways.filter(g => g.id === c.gateway)[0];

// Temperature controllers reducer
const tempControllers = (state = [], action) => {
  let filteredState = [];
  let gatewayName = "";

  switch (action.type) {
    case REHYDRATE:
      const incoming = action.payload.tempControllers;
      if (incoming) return incoming;
      return state;

    case 'ADD_TEMP_CONTROLLER':
      gatewayName = getGateway(action.values, action.getState).name
      return [...state, { ...action.values, id: uuid.v4(), gatewayName }];

    case 'EDIT_TEMP_CONTROLLER':
      filteredState = state.filter(c => c.id !== action.values.id);
      gatewayName = getGateway(action.values, action.getState).name
      return [...filteredState, { ...action.values, gatewayName }];

    case 'DELETE_TEMP_CONTROLLER':
      return state.filter(c => c.id !== action.controller);

    case 'TEMP_ACTUAL_TEMP_DATA':
      return state.map((c) => {
        if (c.gateway === action.gatewayId && c.idCode === action.idCode) {
          c.actualTemp = parseInt(action.value, 10) / 10;
        }
        return c;
      });

    case 'TEMP_HEATING_MODE':
      return state.map((c) => {
        if (c.gateway === action.gatewayId && c.idCode === action.idCode) {
          c.heatingMode = parseInt(action.value, 10);
        }
        return c;
      });

    case 'TEMP_POINT_TEMP':
      return state.map((c) => {
        if (c.gateway === action.gatewayId && c.idCode === action.idCode) {
          c.pointTemp = parseInt(action.value, 10) / 10;
        }
        return c;
      });

    case 'EDIT_GATEWAY_NAME':
      // If editing a gateway we need to update to gatewayName
      // in every controller associated
      return state.map((c) => {
        if (c.gateway === action.values.id) {
          return { ...c, gatewayName: action.values.name };
        }
        return c;
      });

    default:
      return state;
  }
};

export default tempControllers;
