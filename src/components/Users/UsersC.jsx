import * as axios from "axios";
import React from "react";
import s from "./UsersC.module.css";

class UsersC extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    )
    .then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
      page.push(i);
    }

    return (
      <div>
        {page.map((p) => {
          return (
            <span
              onClick={(e) => { this.onPageChanged(p) }}
              className={this.props.currentPage === p && s.selectedPage}
            >
              {p}
            </span>
          );
        })}
        {this.props.users.map((u) => {
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
                        this.props.unFollow(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
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
  }
}

export default UsersC;
