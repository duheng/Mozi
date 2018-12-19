import { GET, } from '../../commons/utils/request';
import { MOVE_LIST, MOVE_LISTALL, } from '../constants/urls';
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
      console.log('logs--', resp);
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

const fetchMovieAll = params => {
  return dispatch => {
    return GET(MOVE_LISTALL, params).then(resp => {
      console.log('logs--', resp);
      dispatch(
        receiveMovies({
          movieid: [],
          movies: resp.coming,
        }),
      );
    });
  };
};

module.exports = {
  fetchMovies,
  fetchMovieAll,
};
