import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore, createTransform } from 'redux-persist';
import createFilter from './createFilter';

import AppReducer from '../reducers';

// So we only store those fields from gateways state
const gatewaysFilter = createFilter(
  'gateways',
  ['id', 'name', 'ip_address', 'port', 'password', 'status'],
);

const lightControllersFilter = createFilter(
  'lightControllers',
  ['id', 'name', 'idCode', 'gateway', 'gatewayName', 'type'],
);

const tempControllersFilter = createFilter(
  'tempControllers',
  ['id', 'name', 'idCode', 'gateway', 'gatewayName', 'type'],
);


// Middleware applied to the store to make it possible to reducers
// to access the global state and the dispatch method
const middleware = store => next => action => {
  next({
    ...action,
    getState: store.getState,
    dispatch: store.dispatch,
  });
}

// Create the store using the middleware
const store = createStore(
  AppReducer,
  undefined,
  applyMiddleware(middleware),
)

// Persist storage with redux-persist
export const persist = () => persistStore(store, {
  storage: AsyncStorage,
  whitelist: ['lightControllers', 'tempControllers', 'gateways'],
  transforms: [
    gatewaysFilter,
    lightControllersFilter,
    tempControllersFilter,
  ],
});

export default store;
