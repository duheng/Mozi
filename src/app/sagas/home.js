import { put, take, call, fork } from 'redux-saga/effects';
import * as types from 'constants/action-types';
import { POST } from 'utils/request';
import { PIAOFANG_BOX_WILLPLAY, PIAOFANG_BOX_RANK } from 'constants/urls';
import { receiveLibrary } from 'actions/home';

const PARAMS = {
	lang: 'cn',
};
export function* handleLibraryAction() {
	const resp = yield call(POST, PIAOFANG_BOX_WILLPLAY, PARAMS);
	if (resp) {
		yield put(receiveLibrary(resp.data));
	} else {
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
