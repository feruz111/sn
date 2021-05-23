import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { RootStoreType } from "../../redux/store";
import {
  follow,
  followingInProgressAC,
  getUsersThunkCreator,
  setCurrentPage,
  unFollow,
  UsersType
} from "../../redux/users-reducer";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/users-selectors";
import Users from "./Users";

type MSTPT = {
  users: Array<UsersType>;
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  isFetching: boolean;
  followingInProgress: any;
  isAuth: boolean;
};

type MDTPT = {
  setCurrentPage: (pageNumber: number) => void;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  followingInProgressAC: (isFetching: boolean, userId: number) => void;
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void;
};

type UsersContainerType = MSTPT & MDTPT;

class UsersContainer extends React.Component<UsersContainerType, {}> {
  componentDidMount() {
    const { pageSize, currentPage } = this.props;

    this.props.getUsersThunkCreator(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.getUsersThunkCreator(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        <Users
          isFetching={this.props.isFetching}
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

let mapStateToProps = (state: RootStoreType): MSTPT => {
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

export default compose<ComponentType>(
  withAuthRedirect,
  connect<MSTPT, MDTPT, {}, RootStoreType>(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    followingInProgressAC,
    getUsersThunkCreator,
  })
)(UsersContainer);
