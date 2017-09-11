import { change_light } from '../openwebnet';

// Contollers reducer
const controllers = (state = [], action) => {

  switch (action.type) {
    case 'ADD_CONTROLLER':
      // Take form values from global state as we won't have that
      // in the navigationOptions (where the button is)
      let values = action.getState().form.controller.values;
      values.id = state.length;
      return [...state, values];
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
