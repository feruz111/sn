import * as axios from "axios";
import React, { useEffect } from "react";
import s from "./Users.module.css";

const Users = (props) => {
 
  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.photoUrl} className={s.userPhoto} />
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
