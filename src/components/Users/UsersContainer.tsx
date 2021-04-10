import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  toggleIsFetching,
  setTotalUsersCount,
  setUsers,
  unFollow,
  UsersType
} from "../../redux/usersReducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../Common/Preloader/Preloader";
import { RootStoreType } from "../../redux/redux-store";


type UsersContainerType = {
  users: Array<UsersType>  
  pageSize: number
  currentPage: number
  totalUsersCount: number
  isFetching: boolean
  toggleIsFetching: (value: boolean) => void
  setUsers: (value: any) => void
  setTotalUsersCount: (totalCount: number) => void
  setCurrentPage: (pageNumber: number) => void
  follow: (id: number) => void
  unFollow: (id: number) => void
}

class UsersContainer extends React.Component<UsersContainerType,{}> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
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
  };
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
