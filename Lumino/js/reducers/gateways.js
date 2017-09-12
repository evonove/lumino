import uuid from 'react-native-uuid';

// Gateways reducer

const gateways = (state = [], action) => {
  let values = {};

  switch (action.type) {

    case 'ADD_GATEWAY':
      // Take form values from global state as we won't have that
      // in the navigationOptions (where the button is)
      values = action.getState().form.gateway.values;
      values.id = uuid.v4();
      return [...state, values];

    case 'DELETE_CONTROLLER':
      return state.filter((g) => g.id !== action.gateway);

    case 'EDIT_GATEWAY':
      values = action.getState().form.gateway.values;
      let filteredState = state.filter((g) => g.id != values.id);
      return [...filteredState, values];

    default:
      return state;
  }
}

export default gateways;
