import { GET, } from '../../commons/utils/request';
import { MOVE_LIST, } from '../constants/urls';
import * as types from '../constants/actionTypes';

const receiveMovies = data => {
  return {
    type: types.RECEIVE_MOVIES,
    ...data,
  };
};

const fetchMovies = params => {
  return dispatch => {
    return GET(MOVE_LIST, params).then(resp => {
      const { movieIds, movieList, } = resp;
      dispatch(
        receiveMovies({
          movieid: movieIds,
          movies: movieList,
        }),
      );
    });
  };
};


module.exports = {
  fetchMovies,
};
