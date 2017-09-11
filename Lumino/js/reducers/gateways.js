// Gateways reducer

// Some mock gateways used for development
const initialGateways = [
  {
    id: 0,
    name: "Office",
    ip_address: "192.168.247.35",
    port: 20000
  },
  {
    id: 1,
    name: "Home",
    ip_address: "192.168.247.35",
    port: 20000
  },
  {
    id: 2,
    name: "Altro",
    ip_address: "192.168.247.35",
    port: 20000
  }
]


const gateways = (state = initialGateways, action) => {
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
