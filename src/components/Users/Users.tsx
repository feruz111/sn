import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { UsersType } from "../../redux/usersReducer";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";

type UsersContainerPropsType = {
  users: Array<UsersType>;
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  followingInProgress: any;
  isAuth: boolean;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  onPageChanged: (pageNumber: number) => void;
  followingInProgressAC: (isFetching: boolean, userId: number) => void;
};

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  isAuth,
  users,
  onPageChanged,
  ...props
}: UsersContainerPropsType) => {
  return (
    <div>
      <Paginator
        pageSize={pageSize}
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        onPageChanged={onPageChanged}
        isAuth={isAuth}
      />
      {users.map((u: UsersType) => {
        return (
          <User
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unFollow={props.unFollow}
          />
        );
      })}
    </div>
  );
};

export default Users;
