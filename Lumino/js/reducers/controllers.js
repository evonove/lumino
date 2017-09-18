import uuid from 'react-native-uuid';
import { REHYDRATE } from 'redux-persist/constants'

import { changeLight, readLightStatus } from '../openwebnet';


// Helper method to extract gateway object from the global state
// c stands for Controller
const getGateway = (c, getState) => getState().gateways.filter(g => g.id === c.gateway)[0];

// Contollers reducer
const controllers = (state = [], action) => {
  let newController = {};
  let filteredState = [];
  let gateway = {};

  switch (action.type) {
    case REHYDRATE:
      const incoming = action.payload.controllers;
      if (incoming) return incoming;
      return state;

    case 'ADD_CONTROLLER':
      gateway = getGateway(action.values, action.getState)
      newController = {
        ...action.values,
        id: uuid.v4(),
        gatewayName: gateway.name,
      };
      readLightStatus(action.dispatch, newController, gateway);
      return [...state, newController];

    case 'EDIT_CONTROLLER':
      filteredState = state.filter(c => c.id !== action.values.id);
      gateway = getGateway(action.values, action.getState)

      newController = {
        ...action.values,
        gatewayName: getGateway(action.values, action.getState).name,
      };
      readLightStatus(action.dispatch, newController, gateway);
      return [...filteredState, newController];

    case 'DELETE_CONTROLLER':
      return state.filter(c => c.id !== action.controller);

    case 'CONTROLLER_DATA':
      return state.map((c) => {
        if (c.gateway === action.gatewayId) {
          if (c.zoneCode === action.zoneCode && c.idCode === action.idCode) {
            c.value = action.value;
          }
        }
        return c;
      });

    case 'WRITE_CONTROLLER':
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

export default controllers;
