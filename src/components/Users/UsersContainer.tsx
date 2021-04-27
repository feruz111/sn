import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unFollow,
  UsersType,
  followingInProgressAC,
  getUsersThunkCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { RootStoreType } from "../../redux/redux-store";
import { Redirect } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getPageSize,
  getUsers,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/users-selectors";

type UsersContainerType = {
  users: Array<UsersType>;
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  isFetching: boolean;
  followingInProgress: any;
  isAuth: boolean;
  setCurrentPage: (pageNumber: number) => void;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  followingInProgressAC: (isFetching: boolean, userId: number) => void;
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void;
};

class UsersContainer extends React.Component<UsersContainerType, {}> {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          isAuth={this.props.isAuth}
          followingInProgress={this.props.followingInProgress}
          followingInProgressAC={followingInProgressAC}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}

let mapStateToProps = (state: RootStoreType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    followingInProgressAC,
    getUsersThunkCreator,
  })
)(UsersContainer);
