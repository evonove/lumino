import { change_light, read_light } from '../openwebnet';
import uuid from 'react-native-uuid';



// Contollers reducer
const controllers = (state = [], action) => {

  let values = {}
  let gateways = []
  const getGateway = (c, gateways) => gateways.filter((g) => g.id === c.gateway)[0]

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

    // case 'READ_CONTROLLER':
    //   gateways = action.getState().gateways;
    //   const newState = state.map((c) => {
    //     if (c.id === action.id) {
    //       c.value = read_light(getGateway(c, gateways), c);
    //     }
    //   });
    //   return newState

    case 'CONTROLLER_CHANGE':
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
