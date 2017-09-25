import { combineReducers } from 'redux';

import base from './base';
import home from './home';

const rootReducer = combineReducers({
  base,
  home,
});

export default rootReducer;
