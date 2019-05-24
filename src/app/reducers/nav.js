import Routers from '../../routers/app';

const nav = (state, action) => {
  const newState = Routers.router.getStateForAction(action, state);
  console.log(state, '===newState----', newState);
  return newState || state;
};

export default nav;
