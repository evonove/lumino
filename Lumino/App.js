import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './js/reducers';
import App from './js/navigators/AppNavigator';

const store = createStore(AppReducer);

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
