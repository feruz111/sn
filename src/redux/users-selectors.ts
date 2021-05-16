import { createSelector } from "reselect";
import { RootStoreType } from "./store";

export const getUsersSelector = (state: RootStoreType) => {
  return state.userPage.users;
};
export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});
export const getPageSize = (state: RootStoreType) => {
  return state.userPage.pageSize;
};
export const getTotalUsersCount = (state: RootStoreType) => {
  return state.userPage.totalUsersCount;
};
export const getCurrentPage = (state: RootStoreType) => {
  return state.userPage.currentPage;
};
export const getIsFetching = (state: RootStoreType) => {
  return state.userPage.isFetching;
};
export const getFollowingInProgress = (state: RootStoreType) => {
  return state.userPage.followingInProgress;
};
