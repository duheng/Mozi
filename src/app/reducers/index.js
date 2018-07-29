import { combineReducers, } from 'redux';

import nav from './nav';
import home from './home';

const rootReducer = combineReducers({
  nav,
  home,
});

export default rootReducer;
