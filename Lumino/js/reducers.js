import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { AppNavigator } from './navigators/AppNavigator';


// Create initial nav state
const initialState = AppNavigator.router.getStateForAction('home');


// nav reducer
const nav = (state = initialState, action) => {
  return AppNavigator.router.getStateForAction(action, state);
};


const mock_gateways = [{name: "My shiny gateway", status: "Connected"}];

const gateways = (state = mock_gateways, action) => {
  switch (action.type) {
    case 'ADD_GATEWAY':
      return [...state, action.data];
    case 'SUBMIT_GATEWAY':
      console.log(action.getState());
      return state;
    default:
      return state;
  }
}



const mock_controllers = [
  { name: 'Meeting Ruoom', type: 'dimmable', code: '80930', gateway: 'Gateway #1', },
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
  form: formReducer,
});

export default AppReducer;
