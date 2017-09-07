import { createSelector } from 'reselect';

const getHome = state => {
  const { library, loading } = { ...state.home };
  console.log({ ...state.home });
  if (!loading) {
    return library.movies;
  }
};

export default createSelector([getHome], home => {
  return {
    home,
  };
});
