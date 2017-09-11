import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configure-store';
import rootSaga from 'sagas';
import App from 'containers/app';

const store = configureStore();
// run root saga
store.runSaga(rootSaga);

export default class Root extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <App
          ref={ref => {
            this.rootNav = ref;
          }}
        />
      </Provider>
    );
  }
}
