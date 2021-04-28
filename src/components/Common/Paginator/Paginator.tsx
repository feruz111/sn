import React from "react";
import { Redirect } from "react-router-dom";
import { UsersType } from "../../../redux/usersReducer";
import s from "./Paginator.module.css";

type UsersContainerPropsType = {
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  onPageChanged: (pageNumber: number) => void;
  isAuth: boolean;
};

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  isAuth,
  onPageChanged,
}: UsersContainerPropsType) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let page = [];
  for (let i = 1; i <= pagesCount; i++) {
    page.push(i);
  }
  if (isAuth === false) return <Redirect to={"/login"} />;

  return (
    <div>
      {page.map((p) => {
        return (
          <span
            onClick={(e) => {
              onPageChanged(p);
            }}
            className={currentPage === p ? s.selectedPage : ""}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
