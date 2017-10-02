import uuid from 'react-native-uuid';
import { REHYDRATE } from 'redux-persist/constants'

import { gatewayStatus } from '../openwebnet';


// Gateways reducer
const gateways = (state = [], action) => {
  let filteredState = [];

  switch (action.type) {
    case REHYDRATE:
      const incoming = action.payload.gateways
      if (incoming) return incoming;
      return state;

    case 'ADD_GATEWAY':
      return [...state, { ...action.values, id: uuid.v4() }];

    case 'DELETE_GATEWAY':
      return state.filter(g => g.id !== action.gateway);

    case 'EDIT_GATEWAY':
      return [
         ...state.filter(g => g.id !== action.values.id),
        { ...action.values, client: undefined, networkStatus: undefined }
      ];

    case 'GATEWAY_UNREACHABLE':
      filteredState = state.filter(g => g.id !== action.gateway.id);

      // Check if the gateway was present.
      // It could be the case that a gateway was eliminated and
      // only after the socket disconnected. Without this check
      // the deleted gateway would be added again to the list
      // once it disconnects.
      if (filteredState.length === state.length - 1) {
        return [
          ...filteredState,
          { ...action.gateway, client: undefined, networkStatus: 'Unreachable' }
        ];
      }
      return state;

    case 'GATEWAY_REACHABLE':
      filteredState = state.filter(g => g.id !== action.gateway.id);

      // Check if the gateway was present.
      // It could be the case that a gateway was eliminated and
      // only after the socket disconnected. Without this check
      // the deleted gateway would be added again to the list
      // once it disconnects.
      if (filteredState.length === state.length - 1) {
        return [
          ...filteredState,
          { ...action.gateway, networkStatus: 'Reachable' }
        ];
      }
      return state

    default:
      return state;
  }
};

export default gateways;
