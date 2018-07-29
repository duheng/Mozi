import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middlewares = [ thunk, ];
const { logger, } = require('redux-logger');

/* global __DEV__  */
if (__DEV__) {
  middlewares.push(logger);
  console.disableYellowBox = true;
  console.ignoredYellowBox = [ 'Warning: ...', ];
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    const acceptCallback = () => {
      store.replaceReducer(rootReducer);
    };
    module.hot.accept('reducers/index', acceptCallback);
    module.hot.acceptCallback = acceptCallback;
  }

  return store;
}
