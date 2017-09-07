// Gateways reducer


// Some mock gateways used for development
const initialGateways = [
  {
    id: 1,
    name: "Prova 1",
    status: "Connected"
  },
  {
    id: 2,
    name: "Provaa 2",
    status: "",
  }
]


const gateways = (state = initialGateways, action) => {
  switch (action.type) {
    case 'ADD_GATEWAY':
      // Take form values from global state as we won't have that
      // in the navigationOptions (where the button is)
      let values = action.getState().form.gateway.values;
      return [...state, values];
    default:
      return state;
  }
}

export default gateways;
