import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  toggleIsFetching,
  setTotalUsersCount,
  setUsers,
  unFollow,
  UsersType,
  followingInProgressAC,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { RootStoreType } from "../../redux/redux-store";
import { usersAPI } from "../../api/api";

type UsersContainerType = {
  users: Array<UsersType>;
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  isFetching: boolean;
  followingInProgress: any;
  toggleIsFetching: (value: boolean) => void;
  setUsers: (value: any) => void;
  setTotalUsersCount: (totalCount: number) => void;
  setCurrentPage: (pageNumber: number) => void;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  followingInProgressAC: (isFetching: boolean, userId: number) => void;
};

class UsersContainer extends React.Component<UsersContainerType, {}> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
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
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgress: state.userPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  followingInProgressAC,
})(UsersContainer);
