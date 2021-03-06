import uuid from 'react-native-uuid';
import { REHYDRATE } from 'redux-persist/constants'

import { changeLight } from '../openwebnet';


// Helper method to extract gateway object from the global state
// c stands for Controller
const getGateway = (c, getState) => getState().gateways.filter(g => g.id === c.gateway)[0];

// Contollers reducer
const lightControllers = (state = [], action) => {
  let filteredState = [];
  let gatewayName = "";

  switch (action.type) {
    case REHYDRATE:
      const incoming = action.payload.lightControllers;
      if (incoming) return incoming;
      return state;

    case 'ADD_LIGHT_CONTROLLER':
      gatewayName = getGateway(action.values, action.getState).name
      return [...state, { ...action.values, id: uuid.v4(), gatewayName }];

    case 'EDIT_LIGHT_CONTROLLER':
      filteredState = state.filter(c => c.id !== action.values.id);
      gatewayName = getGateway(action.values, action.getState).name
      return [...filteredState, { ...action.values, gatewayName }];

    case 'DELETE_LIGHT_CONTROLLER':
      return state.filter(c => c.id !== action.controller);

    case 'LIGHT_CONTROLLER_DATA':
      return state.map((c) => {
        if (c.gateway === action.gatewayId && c.idCode === action.idCode) {
          c.value = parseInt(action.value, 10);
        }
        return c;
      });

    case 'WRITE_LIGHT_CONTROLLER':
      // Create new state with a fixed controller value
      // Also send the command
      return state.map((c) => {
        if (c.id === action.id) {
          // Update toggle value
          c.value = action.value;
          changeLight(getGateway(c, action.getState), c, action.dispatch);
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

export default lightControllers;
