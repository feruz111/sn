import React from "react";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../redux/usersReducer";
import s from "./Users.module.css";

type UsersContainerPropsType = {
  user: any;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  followingInProgress: any;
};

const User = ({
  user,
  followingInProgress,
  follow,
  unFollow,
}: UsersContainerPropsType) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img src={user.photoUrl} className={s.userPhoto} />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(
                (id: number) => id !== user.id
              )}
              onClick={() => {
                unFollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(
                (id: number) => id !== user.id
              )}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{"user.location.city"}</div>
        <div>{"user.location.country"}</div>
      </span>
    </div>
  );
};

export default User;
