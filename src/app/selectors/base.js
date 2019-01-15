import { createSelector, } from 'reselect';

const getBase = state => {
  const { logged, } = { ...state.base, };
  return logged;
};

export default createSelector(getBase, logged => {
  console.log('logged-----------', logged);
  return {
    logged,
  };
});
