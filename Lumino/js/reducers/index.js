import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import controllers from './controllers';
import gateways from './gateways';
import nav from './nav';


// App reducer, combined
const AppReducer = combineReducers({
  nav,
  gateways,
  controllers,
  form: formReducer,
});

export default AppReducer;
