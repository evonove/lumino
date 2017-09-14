import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import controllers from './controllers';
import config from './config';
import gateways from './gateways';
import nav from './nav';


// App reducer, combined
const AppReducer = combineReducers({
  nav,
  gateways,
  controllers,
  config,
  form: formReducer,
});

export default AppReducer;
