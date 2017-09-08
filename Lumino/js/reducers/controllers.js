// Contollers reducer
var net = require('net');

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
        };
        let string = '';
        console.warn(controller.value);
        if (controller.value == true) {
          string = '*1*1*22##';
        } else {
          string = '*1*0*22##';
        }
        let client = net.createConnection(20000, "192.168.247.35", () => {
          client.write(string);
        });


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
