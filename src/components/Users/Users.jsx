import * as axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";

const Users = (props) => {
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
            className={props.currentPage === p && s.selectedPage}
          >
            {p}
          </span>
        );
      })}
      {props.users.map((u) => {
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
                      props.unFollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
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
