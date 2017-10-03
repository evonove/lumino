import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import lightControllers from './lightControllers';
import tempControllers from './tempControllers';
import gateways from './gateways';
import nav from './nav';


// App reducer, combined
const AppReducer = combineReducers({
  nav,
  gateways,
  lightControllers,
  tempControllers,
  form: formReducer,
});

export default AppReducer;
