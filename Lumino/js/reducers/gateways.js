// Gateways reducer

const gateways = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GATEWAY':
      // Take form values from global state as we won't have that
      // in the navigationOptions (where the button is)
      let values = action.getState().form.gateway.values;

      // FIXME: this won't be good when we'll allow deleting gateways
      values.id = state.length;
      return [...state, values];
    default:
      return state;
  }
}

export default gateways;
