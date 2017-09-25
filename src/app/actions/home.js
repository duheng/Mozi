import * as types from 'constants/action-types';

export function fetchLibrary() {
  return {
    type: types.FETCH_BOX_LIBRARY,
  };
}

export function receiveLibrary(library) {
  return {
    type: types.RECEIVE_BOX_LIBRARY,
    library,
  };
}
