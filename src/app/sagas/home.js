import { put, take, call, fork } from "redux-saga/effects"
import { FETCH_JUNSHI } from "../constants/actionTypes"
import { GET } from "../../commons/utils/request"
import { ZIXUN_JUNSHI } from "../constants/urls"
import { showLoading } from "../actions/base"
import { receiveJunShi } from "../actions/home"

const PARAMS = {
  channel_id: "c7",
  cstart: 1,
  cend: 50,
  infinite: true,
  refresh: 1,
  __from__: "wap",
  multi: 5,
  appid: "web_yidian",
}
export function* handleJunShiAction() {
  yield put(showLoading(true)) // 控制loading状态
  const resp = yield call(GET, ZIXUN_JUNSHI, PARAMS)
  if (resp) {
    yield put(receiveJunShi(resp.result))
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
