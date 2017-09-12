// Gateways reducer

const gateways = (state = [], action) => {
  let values = {};

  switch (action.type) {
    case 'ADD_GATEWAY':
      // Take form values from global state as we won't have that
      // in the navigationOptions (where the button is)
      values = action.getState().form.gateway.values;

      // FIXME: this won't be good when we'll allow deleting gateways
      values.id = state.length;
      return [...state, values];
    case 'EDIT_GATEWAY':
      values = action.getState().form.gateway.values;
      let filteredState = state.filter((g) => g.id != values.id);
      return [...filteredState, values];
    default:
      return state;
  }
}

export default gateways;
