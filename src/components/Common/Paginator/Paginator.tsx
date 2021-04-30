import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { UsersType } from "../../../redux/usersReducer";
import s from "./Paginator.module.css";

type UsersContainerPropsType = {
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  onPageChanged: (pageNumber: number) => void;
  isAuth: boolean;
  portionSize?: number;
};

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  isAuth,
  onPageChanged,
  portionSize = 10,
}: UsersContainerPropsType) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  if (isAuth === false) return <Redirect to={"/login"} />;

  return (
    <div className={s.paginator}> 
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
            className={currentPage === p ? `${s.selectedPage} ${s.page}` : s.page} 
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
