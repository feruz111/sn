import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import s from "./Paginator.module.css";
import rightArrowImg from "../../../assets/rightArrow.svg";
import leftArrowImg from "../../../assets/leftArrow.svg";

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
  const rightArrow = { backgroundImage: `url(${rightArrowImg})` };
  const leftArrow = { backgroundImage: `url(${leftArrowImg})` };

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
      <div className={s.arrowLeftContainer}>
        {portionNumber > 1 && (
          <button
          style={leftArrow}
            className={s.arrowLeft}
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          ></button>
        )}
      </div>
      <div className={s.pages}>
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <div
                className={
                  currentPage === p ? `${s.selectedPage} ${s.page}` : s.page
                }
                key={p}
                onClick={(e) => {
                  onPageChanged(p);
                }}
              >
                {p}
              </div>
            );
          })}
      </div>
      <div className={s.arrowRightContainer}>
        {portionCount > portionNumber && (
          <button
            style={rightArrow}
            className={s.arrowRight}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
