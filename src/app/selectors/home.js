import { createSelector, } from 'reselect';

const listData = item => {
  const MyItem = { ...item, };

  return {
    key: MyItem.item_id,
    data: [ { ...MyItem, }, ],
  };
};

const getHome = state => {
  const { junshi, } = { ...state.home, };
  const filterJunShi = junshi.map(listData);
  return filterJunShi;
};

export default createSelector(getHome, home => {
  console.log('redu-js--', home);
  return {
    home,
  };
});
