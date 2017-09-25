import * as types from 'constants/action-types';

export function showLoading(loading = true) {
  return {
    type: types.BASE_LOADING,
    loading,
  };
}

export default showLoading;
