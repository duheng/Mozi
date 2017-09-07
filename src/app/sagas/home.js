import { put, take, call, fork } from 'redux-saga/effects';
import * as types from 'constants/action-types';
import { POST } from 'utils/request';
import { PIAOFANG_BOX_WILLPLAY, PIAOFANG_BOX_RANK } from 'constants/urls';
import { receiveLibrary } from 'actions/home';

const DEFAULT_WILLPLAY_PARAMS = {
  lang: 'cn',
};
export function* handleLibraryAction() {
  try {
    const library = yield call(
      POST,
      PIAOFANG_BOX_WILLPLAY,
      DEFAULT_WILLPLAY_PARAMS
    );
    yield put(receiveLibrary(library.data));
  } catch (error) {
    yield put(receiveLibrary({}));
  }
}

export function* requestLibraryTask() {
  while (true) {
    yield take(types.FETCH_BOX_LIBRARY);
    yield fork(handleLibraryAction);
  }
}

export function* watchLibrary() {
  yield [call(requestLibraryTask)];
}
