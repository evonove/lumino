import uuid from 'react-native-uuid';

import { changeLight, readLight } from '../openwebnet';


// Helper method to extract gateway object from the global state
// c stands for Controller
const getGateway = (c, getState) => getState().gateways.filter((g) => g.id === c.gateway)[0];

// Contollers reducer
const controllers = (state = [], action) => {
  switch (action.type) {

    case 'ADD_CONTROLLER':
      const newController = {
        ...action.values,
        id: uuid.v4(),
        gateway_name: getGateway(action.values, action.getState).name
      }
      return [...state, newController];

    case 'EDIT_CONTROLLER':
      const filteredState = state.filter((g) => g.id != action.values.id);

      const editedController = {
        ...action.values,
        gateway_name: getGateway(action.values, action.getState).name
      }
      return [...filteredState, editedController];

    case 'DELETE_CONTROLLER':
      return state.filter((c) => c.id !== action.controller);

    case 'READ_CONTROLLER':
      return state.map((c) => {
        if (c.id === action.id) {
          c.value = action.value;
        };
        return c;
      });

    case 'WRITE_CONTROLLER':
      // Create new state with a fixed controller value
      // Also send the command
      return state.map((c) => {
        if (c.id === action.id) {
          // Update toggle value
          c.value = action.value;
          changeLight(getGateway(c, action.getState), c);
        };
        return c;
      });
    default:
      return state;
  }
}

export default controllers;
