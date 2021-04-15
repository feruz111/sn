import axios from "axios";
import React, { useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { UsersType } from "../../redux/usersReducer";
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

const Users = (props: UsersContainerPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let page = [];
  for (let i = 1; i <= pagesCount; i++) {
    page.push(i);
  }
  if (props.isAuth === false) return <Redirect to={"/login"} />;

  return (
    <div>
      {page.map((p) => {
        return (
          <span
            onClick={(e) => {
              props.onPageChanged(p);
            }}
            className={props.currentPage === p ? s.selectedPage : ""}
          >
            {p}
          </span>
        );
      })}
      {props.users.map((u: UsersType) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img src={u.photoUrl} className={s.userPhoto} />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id: number) => id !== u.id
                    )}
                    onClick={() => {
                      props.unFollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id: number) => id !== u.id
                    )}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
