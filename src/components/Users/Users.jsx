import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://static.eurovision.tv/hb-cgi/images/8d913f0c-4dc8-4d7c-9dcd-d6488e62a3ca/hero.jpg",
        followed: true,
        fullName: "Dmitry",
        status: "boss",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://static.eurovision.tv/hb-cgi/images/8d913f0c-4dc8-4d7c-9dcd-d6488e62a3ca/hero.jpg",
        followed: false,
        fullName: "Andrew",
        status: "boss too",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://static.eurovision.tv/hb-cgi/images/8d913f0c-4dc8-4d7c-9dcd-d6488e62a3ca/hero.jpg",
        followed: true,
        fullName: "John",
        status: "boss too",
        location: { city: "Detroit", country: "USA" },
      },
    ]);
  }

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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
