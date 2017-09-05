import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from './navigators/AppNavigator';


// Create initial nav state
const initialState = AppNavigator.router.getStateForAction('home');


// nav reducer
const nav = (state = initialState, action) => {
  return AppNavigator.router.getStateForAction(action, state);
};


const gateways = (state = [], action) => {
  return state;
}


const controllers = (state = [], action) => {
  return state;
}


// App reducer, combined
const AppReducer = combineReducers({
  nav,
  gateways,
  controllers,
});

export default AppReducer;
