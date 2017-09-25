import { put, take, call, fork } from 'redux-saga/effects';
import * as types from 'constants/action-types';
import { POST } from 'utils/request';
import { PIAOFANG_BOX_WILLPLAY } from 'constants/urls';
import { showLoading } from 'actions/base';
import { receiveLibrary } from 'actions/home';

const PARAMS = {
  lang: 'cn',
};
export function* handleLibraryAction() {
  yield put(showLoading(true)); // 控制loading状态
  const resp = yield call(POST, PIAOFANG_BOX_WILLPLAY, PARAMS);

  if (resp) {
    yield put(receiveLibrary(resp.data));
  } else {
    yield put(receiveLibrary({}));
  }
  yield put(showLoading(false));
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
