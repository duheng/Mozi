import { put, take, call, fork } from "redux-saga/effects"
import { FETCH_JUNSHI } from "../constants/actionTypes"
import { GET } from "../../commons/utils/request"
import { ZIXUN_JUNSHI } from "../constants/urls"
import { showLoading } from "../actions/base"
import { receiveJunShi } from "../actions/home"

const PARAMS = {
  tag: "news_hot",
  ac: "wap",
  count: 50,
  format: "json_raw",
  as: "A1E55A7CF10D87C",
  cp: "5AC15D28478C7E1",
  min_behot_time: 0,
}
export function* handleJunShiAction() {
  yield put(showLoading(true)) // 控制loading状态
  const resp = yield call(GET, ZIXUN_JUNSHI, PARAMS)
  if (resp) {
    yield put(receiveJunShi(resp.data))
  } else {
    yield put(receiveJunShi({}))
  }
  yield put(showLoading(false))
}

export function* requestJunShiTask() {
  while (true) {
    yield take(FETCH_JUNSHI)
    yield fork(handleJunShiAction)
  }
}

export function* watchJunShi() {
  yield [call(requestJunShiTask)]
}
