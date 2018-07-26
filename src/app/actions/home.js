import { GET, POST } from "../../commons/utils/request"
import { ZIXUN_JUNSHI } from "../constants/urls"
import * as types from "../constants/actionTypes"

export function fetchJunShi() {

  const PARAMS = {
    tag: "news_hot",
    ac: "wap",
    count: 50,
    format: "json_raw",
    as: "A1E55A7CF10D87C",
    cp: "5AC15D28478C7E1",
    min_behot_time: 0,
  }
  return (dispatch, getState) => {

      return new GET(ZIXUN_JUNSHI,  PARAMS )
          .then(resp => {
              dispatch(
                receiveJunShi({
                  junshi: resp.data
                })
              )
          })


  }
}

export function receiveJunShi(data) {
  return {
    type: types.RECEIVE_JUNSHI,
    ...data,
  }
}
