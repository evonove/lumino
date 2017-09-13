import uuid from 'react-native-uuid';

import { change_light, read_light } from '../openwebnet';


// Contollers reducer
const controllers = (state = [], action) => {

  let values = {};
  let gateways = [];
  let newState = [];
  const getGateway = (c, gateways) => gateways.filter((g) => g.id === c.gateway)[0];

  switch (action.type) {

    case 'ADD_CONTROLLER':
      gateways = action.getState().gateways;
      values = action.getState().form.controller.values;
      // Take form values from global state as we won't have that
      // in the navigationOptions (where the button is)
      values.id = uuid.v4();
      values.gateway_name = getGateway(values, gateways).name;
      return [...state, values];

    case 'EDIT_CONTROLLER':
      gateways = action.getState().gateways;
      values = action.getState().form.controller.values;
      // Remove old controller value and add new ones from form
      values.gateway_name = getGateway(values, gateways).name;
      let filteredState = state.filter((g) => g.id != values.id);
      return [...filteredState, values];

    case 'DELETE_CONTROLLER':
      return state.filter((c) => c.id !== action.controller);

    case 'READ_CONTROLLERS':
      console.warn("READ!");
      // Get active gateways
      gateways = action.getState().gateways.filter((g) => g.status);
      state.forEach((c) => read_light(getGateway(c, gateways), c, (val) => console.warn(val)));

      // Read value from gateway and set it into the state
      return state

    case 'CHANGE_CONTROLLER':
      gateways = action.getState().gateways;
      // Create new state with a fixed controller value
      // Also send the command
      return state.map((c) => {
        if (c.id === action.id) {
          // Update toggle value
          c.value = action.value;
          change_light(getGateway(c, gateways), c);
        };
        return c;
      });
    default:
      return state;
  }
}

export default controllers;
