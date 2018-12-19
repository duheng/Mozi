import { createSelector, } from 'reselect';

const listData = item => {
  const MyItem = { ...item, };

  return {
    key: MyItem.id,
    data: [ { ...MyItem, }, ],
  };
};

const getHome = state => {
  const { movies, movieid, } = { ...state.home, };
  console.log('movies--', movies);
  const filterMovies = movies.map(listData);
  return {
    movieid,
    movies: filterMovies,
  };
};

export default createSelector(getHome, home => {
  console.log('redu-js--', getHome);
  return {
    home,
  };
});
