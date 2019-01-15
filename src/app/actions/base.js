import { GET, POST, } from '../../commons/utils/request';
import { login, } from '../constants/urls';
import * as types from '../constants/actionTypes';

// sigin
export const fetchSigIn = params => {
  return dispatch => {
    return POST(login, params).then(resp => {
      console.log('login-----', resp);
      const { code, message, data, } = resp;
      if (code != 0) {

      } else {
        dispatch({
          type: types.SET_SIGIN_STATE,
          logged: true,
        });
      }
    });
  };
};
