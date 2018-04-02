import { createSelector } from "reselect"

const getLoading = state => {
  const { loading } = { ...state.base }
  return loading
}

const listData = item => {
  const MyItem = { ...item }

  return {
    key: MyItem.item_id,
    data: [{ ...MyItem }],
  }
}

const getHome = state => {
  const { junshi } = { ...state.home }
  const filterJunShi = junshi.map(listData)
  return filterJunShi
}

export default createSelector(getLoading, getHome, (loading, home) => {
  return {
    loading,
    home,
  }
})
