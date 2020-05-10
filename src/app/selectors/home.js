import { createSelector, } from 'reselect';

const listData = item => {
  const MyItem = { ...item, };

  return {
    key: MyItem.id,
    data: [ { ...MyItem, }, ],
  };
};

const getHome = state => {
  const { movies, } = { ...state.home, };
  const filterMovies = movies.map(listData);
  return {
    movies: filterMovies,
  };
};

export default createSelector(getHome, home => {
  console.log('redu-home--', home);
  return {
    home,
  };
});
