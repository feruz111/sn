import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../redux/usersReducer";
import s from "./Users.module.css";

type UsersContainerPropsType = {
  users: Array<UsersType> 
  pageSize: number
  currentPage: number
  totalUsersCount: number
  follow: (id: number) => void
  unFollow: (id: number) => void
  onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersContainerPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let page = [];
  for (let i = 1; i <= pagesCount; i++) {
    page.push(i);
  }

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
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "5b802dfc-8175-4671-99bf-e30ddb894d16",
                            }
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unFollow(u.id);
                          }
                        });

                      props.unFollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "5b802dfc-8175-4671-99bf-e30ddb894d16",
                            }
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                        });
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
