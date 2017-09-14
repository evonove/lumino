import uuid from 'react-native-uuid';

// Gateways reducer
const gateways = (state = [], action) => {
  switch (action.type) {

    case 'ADD_GATEWAY':
      return [...state, {...action.values, id: uuid.v4()}];

    case 'DELETE_GATEWAY':
      return state.filter((g) => g.id !== action.gateway);

    case 'EDIT_GATEWAY':
      let filteredState = state.filter((g) => g.id != action.values.id);
      return [...filteredState, action.values];

    default:
      return state;
  }
}

export default gateways;
