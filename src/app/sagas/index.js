import { delay } from "redux-saga"
import { call, spawn } from "redux-saga/effects"

import { watchJunShi } from "./home"

const makeRestartable = saga => {
  const loop = true
  return function* restartable() {
    yield spawn(function* task() {
      while (loop) {
        try {
          yield call(saga)
          const errMsg =
            "unexpected root saga termination. The root sagas are supposed to be sagas that live during the whole app lifetime!"

          console.error(errMsg, saga)
        } catch (e) {
          console.error("Saga error, the saga will be restarted", e)
        }
        // Avoid infinite failures blocking app TODO use backoff retry policy...
        yield delay(1000)
      }
    })
  }
}

const rootSagas = [watchJunShi].map(makeRestartable)

export default function* rootSaga() {
  yield rootSagas.map(saga => call(saga))
}
