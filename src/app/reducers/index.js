import { combineReducers, } from 'redux';

import nav from './nav';
import base from './base';
import home from './home';

const rootReducer = combineReducers({
  nav,
  base,
  home,
});

export default rootReducer;
