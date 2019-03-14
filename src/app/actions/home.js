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
