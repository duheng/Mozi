import { handleActions, } from 'redux-actions';
import * as types from '../constants/actionTypes';

const initialState = {
  movies: [],
  movieid: [],
};

const handler = {};

handler[types.RECEIVE_MOVIES] = (state, action) => {
  const { movieid, movies, } = action;
  return {
    ...state,
    movieid,
    movies,
  };
};

export default handleActions(handler, initialState);
