import { handleActions, } from 'redux-actions';
import * as types from '../constants/actionTypes';

const initialState = {
  isLogIn: false,
};

const handler = {};

handler[types.SET_LOGIN_STATE] = (state, action) => {
  const { isLogIn, } = action;
  return {
    ...state,
    isLogIn,
  };
};

export default handleActions(handler, initialState);
