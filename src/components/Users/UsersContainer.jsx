import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountAC,
  setUsersActionCreator,
  unFollowActionCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import UsersC from "./UsersC";

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageActionCreator(currentPage))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);
