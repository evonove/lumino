const gateways = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GATEWAY':
      let values = action.getState().form.gateway.values;
      return [...state, values];
    default:
      return state;
  }
}

export default gateways;
