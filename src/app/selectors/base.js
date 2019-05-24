import { createSelector, } from 'reselect';

const getBase = state => {
  const { isLogIn, } = { ...state.base, };
  return isLogIn;
};

export default createSelector(getBase, isLogIn => {
  console.log('logged-----------', isLogIn);
  return {
    isLogIn,
  };
});
