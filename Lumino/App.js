import React from 'react';
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import AppReducer from './js/reducers';
import AppNavigator from './js/navigators/AppNavigator';

// Middleware applied to the store to make it possible to reducers
// to access the global state
const middleware = store => next => action => {
  next({ ...action, getState: store.getState });
}

const store = createStore(
  AppReducer,
  undefined,
  compose(
    applyMiddleware(middleware),
    autoRehydrate()
  )
)

persistStore(store, { storage: AsyncStorage, blacklist: ['nav', 'form']});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
