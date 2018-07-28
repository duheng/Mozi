import { GET, POST } from "../../commons/utils/request"
import { ZIXUN_JUNSHI } from "../constants/urls"
import * as types from "../constants/actionTypes"
console.log('GET----',GET)


export const fetchJunShi = (params) => {
  return ( dispatch, getState ) => {
      return GET( ZIXUN_JUNSHI,  params )
          .then(resp => {
              dispatch(
                receiveJunShi({
                  junshi: resp.data
                })
              )
          })
  }
}

export const receiveJunShi = (data) => {
  return {
    type: types.RECEIVE_JUNSHI,
    ...data,
  }
}
