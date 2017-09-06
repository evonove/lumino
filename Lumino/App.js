import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './js/reducers';
import App from './js/navigators/AppNavigator';

// Middleware applied to the store to make it possible to reducers
// to access the global state
const middleware = store => next => action => {
  next({ ...action, getState: store.getState });
}

const store = createStore(AppReducer, applyMiddleware(middleware));

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
