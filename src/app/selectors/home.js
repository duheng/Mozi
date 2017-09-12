import { createSelector } from 'reselect';

const getHome = state => {
  const { library, loading } = { ...state.home };

  if (!loading) {
    let newSectionList = [];
    let cpSectionList = JSON.parse(JSON.stringify(library.movies));
    cpSectionList.map((item, index) => {
      const { year, month, day, week, list } = item.data;
      month >= 0 &&
        day >= 0 &&
        newSectionList.push({
          key: `${year}年${month}月${day}日 ${week}`,
          data: list,
        });
    });

    return newSectionList;
  }
};

export default createSelector([getHome], home => {
  return {
    home,
  };
});
