import { GET, } from '../../commons/utils/request';
import { movieList, } from '../constants/urls';
import * as types from '../constants/actionTypes';

const receiveMovies = data => {
  return {
    type: types.RECEIVE_MOVIES,
    ...data,
  };
};

const fetchMovies = params => {
  return dispatch => {
    return GET(movieList, params).then(resp => {
      const { coming, } = resp;
      dispatch(
        receiveMovies({
          movies: coming,
        }),
      );
    });
  };
};


module.exports = {
  fetchMovies,
};
