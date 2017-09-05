import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from './navigators/AppNavigator';


// Create initial nav state
const initialState = AppNavigator.router.getStateForAction('home');


// nav reducer
const nav = (state = initialState, action) => {
  return AppNavigator.router.getStateForAction(action, state);
};


const mock_gateways = [{name: "My shiny gateway", status: "Connected"}];

const gateways = (state = mock_gateways, action) => {
  return state;
}



const mock_controllers = [
  { name: 'Meeting Room', type: 'dimmable', code: '80930', gateway: 'Gateway #1', },
  { name: 'Developer Room', type: 'switch', code: '34987', gateway: 'Gateway #3', },
];

const controllers = (state = mock_controllers, action) => {
  return state;
}


// App reducer, combined
const AppReducer = combineReducers({
  nav,
  gateways,
  controllers,
});

export default AppReducer;
