import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import Routers from './routers/app';

@connect(state => ({ nav: state.nav }))
export default class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props;
    console.log('this.props____', this.props);
    return (
      <Routers navigation={addNavigationHelpers({
        dispatch,
        state: nav,
      })}
      />
    );
  }
}
