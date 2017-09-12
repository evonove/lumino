import { change_light } from '../openwebnet';
import uuid from 'react-native-uuid';


// Contollers reducer
const controllers = (state = [], action) => {

  let values = {};

  switch (action.type) {

    case 'ADD_CONTROLLER':
      // Take form values from global state as we won't have that
      // in the navigationOptions (where the button is)
      values = action.getState().form.controller.values;
      values.id = uuid.v4();
      return [...state, values];

    case 'EDIT_CONTROLLER':
      // Remove old controller value and add new ones from form
      values = action.getState().form.controller.values;
      let filteredState = state.filter((g) => g.id != values.id);
      return [...filteredState, values];

    case 'CONTROLLER_CHANGE':
      // Retrieve state's gateways
      const gateways = action.getState().gateways;

      // Create new state with a fixed controller value
      // Also send the command
      const newState = state.map((controller) => {
        if (controller.id == action.id) {
          // Find the controller's gateway
          const gateway = gateways.filter((g) => g.id == controller.gateway)[0]
          // Update toggle value
          controller.value = action.value;
          change_light(gateway, controller);
        };
        return controller;
      });
      return newState;
    default:
      return state;
  }
}

export default controllers;
