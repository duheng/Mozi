import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from '../reducers/index';

const middlewares = [];
const { logger } = require('redux-logger');
// configuring saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

/* global __DEV__  */
if (__DEV__) {
  middlewares.push(logger);
  console.disableYellowBox = true;
  console.ignoredYellowBox = ['Warning: ...'];
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

  // install saga run
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
