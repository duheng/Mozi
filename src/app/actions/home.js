import { GET, } from '../../commons/utils/request';
import { ZIXUN_JUNSHI, } from '../constants/urls';
import * as types from '../constants/actionTypes';

const receiveJunShi = data => {
  return {
    type: types.RECEIVE_JUNSHI,
    ...data,
  };
};

const fetchJunShi = params => {
  return dispatch => {
    return GET(ZIXUN_JUNSHI, params).then(resp => {
      dispatch(
        receiveJunShi({
          junshi: resp.data,
        }),
      );
    });
  };
};

module.exports = {
  fetchJunShi,
};
