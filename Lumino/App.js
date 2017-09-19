import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './js/navigators/AppNavigator';
import store, { persist } from './js/store';


// Start persisting store changes
persist()

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
