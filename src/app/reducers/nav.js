import Routers from "../../routers/app"

const nav = (state, action) => {
  let newState;
  if (action.type) {
    newState = Routers.router.getStateForAction(action, state)
  }
  return newState || state
}

export default nav
