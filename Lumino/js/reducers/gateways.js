import uuid from 'react-native-uuid';
import { gatewayStatus } from '../openwebnet';


// Gateways reducer
const gateways = (state = [], action) => {
  let filteredState = [];
  let newGateway = {};

  switch (action.type) {
    case 'ADD_GATEWAY':
      newGateway = { ...action.values, id: uuid.v4() }
      gatewayStatus(action.dispatch, newGateway);
      return [...state, newGateway];

    case 'DELETE_GATEWAY':
      return state.filter(g => g.id !== action.gateway);

    case 'EDIT_GATEWAY':
      filteredState = state.filter(g => g.id !== action.values.id);
      return [...filteredState, action.values];

    case 'GATEWAY_UNREACHABLE':
      filteredState = state.filter(g => g.id !== action.gateway.id);
      newGateway = {
        ...action.gateway,
        networkStatus: 'Unreachable',
      };

      return [...filteredState, newGateway];

    case 'GATEWAY_REACHABLE':
      filteredState = state.filter(g => g.id !== action.gateway.id);
      newGateway = {
        ...action.gateway,
        networkStatus: 'Reachable',
      };
      return [...filteredState, newGateway];

    default:
      return state;
  }
};

export default gateways;
