import { switch_light_on, switch_light_off } from '../openwebnet';
var net = require('net');
// Contollers reducer


// Some mock controllers used for development
const mockControllers = [
  {
    id: 1,
    name: "Controller 1",
    gateway: 1,
    type: "switch",
    code: "123454",
    value: true,

  },
  {
    id: 2,
    name: "Controller 2",
    gateway: 2,
    type: "dimmer",
    code: "9999",
    value: 0.5,
  },
]


const controllers = (state = mockControllers, action) => {
  switch (action.type) {
    case 'ADD_CONTROLLER':
      // Take form values from global state as we won't have that
      // in the navigationOptions (where the button is)
      let values = action.getState().form.controller.values;
      return [...state, values];
    case 'SWITCH_TOGGLE':
      // Update toggle value
      let newState = state.map((controller) => {
        if (controller.id == action.id) {
          controller.value = action.value;
          if (controller.value == true) {
            switch_light_on("192.168.247.35", 20000, 1, 22);
          } else {
            switch_light_off("192.168.247.35", 20000, 1, 22);
          }
        };
        return controller;
      });
      return newState;
    case 'DIMMER_CHANGE':
      return state;
    default:
      return state;
  }
}


export default controllers;
