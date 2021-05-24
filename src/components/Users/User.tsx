import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/user.svg";
import { UsersType } from "../../redux/users-reducer";
import s from "./User.module.css";

type UsersContainerPropsType = {
  user: UsersType;
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
  console.log(user);

  return (
    <div className={s.userPage}>
      <div className={s.avatar}>
        <NavLink to={`/profile/${user.id}`}>
          <img
            src={user.photos.small !== null ? user.photos.small : userPhoto}
            className={s.userPhoto}
          />
        </NavLink>
      </div>
      <div className={s.userInfo}>
        <div className={s.userName}>{user.name}</div>
        <div className={s.userId}>Id | {user.id}</div>
      </div>
      <div className={s.buttonContainer}>
        {user.followed ? (
          <button
            className={s.buttonFollowUnfollow}
            disabled={followingInProgress.some((id: number) => id !== user.id)}
            onClick={() => {
              unFollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={s.buttonFollowUnfollow}
            disabled={followingInProgress.some((id: number) => id !== user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
