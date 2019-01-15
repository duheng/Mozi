import { handleActions, } from 'redux-actions';
import * as types from '../constants/actionTypes';

const initialState = {
  loading: true,
  logged: false,
};

const handler = {};

handler[types.BASE_LOADING] = (state, action) => {
  const { loading, } = action;
  return {
    ...state,
    loading,
  };
};

handler[types.SET_SIGIN_STATE] = (state, action) => {
  const { logged, } = action;
  return {
    ...state,
    logged,
  };
};

export default handleActions(handler, initialState);
