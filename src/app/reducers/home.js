import { handleActions } from "redux-actions"
import * as types from "../constants/actionTypes"

const initialState = {
  junshi: [],
}

const handler = {}

handler[types.RECEIVE_JUNSHI] = (state, action) => {
  const { junshi } = action
  return {
    ...state,
    junshi,
  }
}

export default handleActions(handler, initialState)
