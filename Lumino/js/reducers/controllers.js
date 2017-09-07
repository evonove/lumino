// Contollers reducer

const controllers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTROLLER':
      // Take form values from global state as we won't have that
      // in the navigationOptions (where the button is)
      let values = action.getState().form.controller.values;
      console.log(values);
      return [...state, values];
    default:
      return state;
  }
}


export default controllers;
