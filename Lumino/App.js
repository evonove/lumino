import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './js/reducers';
import AppNavigator from './js/navigators/AppNavigator';

// Middleware applied to the store to make it possible to reducers
// to access the global state
const middleware = store => next => action => {
  next({ ...action, getState: store.getState });
}

const store = createStore(AppReducer, applyMiddleware(middleware));

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
