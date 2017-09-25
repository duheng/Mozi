import { createSelector } from 'reselect';

const getLoading = state => {
  const { loading } = { ...state.base };
  return loading;
};

const getHome = state => {
  const { library } = { ...state.home };
  const newSectionList = [];
  if (library.movies) {
    const cpSectionList = JSON.parse(JSON.stringify(library.movies));
    cpSectionList.map(item => {
      const { year, month, day, week, list } = item.data;
      month >= 0 &&
        day >= 0 &&
        newSectionList.push({
          key: `${year}年${month}月${day}日 ${week}`,
          data: list,
        });
      return null;
    });
  }

  return newSectionList;
};

export default createSelector(getLoading, getHome, (loading, home) => {
  return {
    loading,
    home,
  };
});
