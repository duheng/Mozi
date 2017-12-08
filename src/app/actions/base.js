import * as types from '../constants/actionTypes';

export function showLoading(loading = true) {
  return {
    type: types.BASE_LOADING,
    loading,
  };
}

export default showLoading;
