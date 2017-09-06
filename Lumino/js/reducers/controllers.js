// const mock_controllers = [
//   { name: 'Meeting Ruoom', type: 'dimmable', code: '80930', gateway: 'Gateway #1', },
//   { name: 'Developer Room', type: 'switch', code: '34987', gateway: 'Gateway #3', },
// ];

const controllers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTROLLER':
      let values = action.getState().form.controller.values;
      return [...state, values];
    case 'CONTROLLER_SELECTION':
      return state;
    default:
      return state;
  }
}


export default controllers;
