import { GET, POST, } from '../../commons/utils/request';
import { login, } from '../constants/urls';
import * as types from '../constants/actionTypes';

// sigin
export const fetchSigIn = params => {
  return dispatch => {
    return POST(login, params).then(resp => {
      console.log('login-----', resp);
      //  const { movieIds, movieList, } = resp;
      dispatch({
        type: types.SET_SIGIN_STATE,
        logged: true,
      });
    });
  };
};
