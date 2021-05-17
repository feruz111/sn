import React from "react";
import { UsersType } from "../../redux/users-reducer";
import Paginator from "../Common/Paginator/Paginator";
import Preloader from "../Common/Preloader/Preloader";
import User from "./User";
import s from "./Users.module.css";

type UsersContainerPropsType = {
  users: Array<UsersType>;
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  followingInProgress: any;
  isAuth: boolean;
  isFetching: boolean;
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
    <div className={s.usersPageContainer}>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <div className={s.userContainer}>
          {users.map((u: UsersType) => {
            return (
              <div className={s.user}>
                <User
                  key={u.id}
                  user={u}
                  followingInProgress={props.followingInProgress}
                  follow={props.follow}
                  unFollow={props.unFollow}
                />
              </div>
            );
          })}
        </div>
      )}
      <div>
        <Paginator
          pageSize={pageSize}
          currentPage={currentPage}
          totalUsersCount={totalUsersCount}
          onPageChanged={onPageChanged}
          isAuth={isAuth}
        />
      </div>
    </div>
  );
};

export default Users;
