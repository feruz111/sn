import { ResponseType } from "axios";
import { Dispatch } from "redux";
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
import { AppActionsType } from "./store";

export type UsersType = {
  id: number;
  photoUrl: string;
  followed: boolean;
  name: string;
  status: string;
  uniqueUrlName: null;
  photos: { small: string |null; large: null };
};

const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

export type FollowActionType = {
  type: "FOLLOW";
  userId: number;
};
export type UnFollowActionType = {
  type: "UNFOLLOW";
  userId: number;
};
export type SetUsersType = {
  type: "SET_USERS";
  users: Array<UsersType>;
};
export type SetCurrentPageAction = {
  type: "SET_CURRENT_PAGE";
  currentPage: number;
};
export type SetTotalUsersCountActionType = {
  type: "SET_TOTAL_USERS_COUNT";
  totalUsersCount: number;
};
export type ToggleIsFetchingType = {
  type: "TOGGLE_IS_FETCHING";
  isFetching: boolean;
};
export type FollowingInProgressType = {
  type: "FOLLOWING_IN_PROGRESS";
  isFetching: boolean;
  userId: number;
};

export type UserPageType = {
  users: [] | Array<UsersType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: any;
};

export type UserReducerActionsType =
  | FollowActionType
  | UnFollowActionType
  | SetUsersType
  | SetCurrentPageAction
  | SetTotalUsersCountActionType
  | ToggleIsFetchingType
  | FollowingInProgressType;

let initialState: UserPageType = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

export const userReducer = (
  state = initialState,
  action: UserReducerActionsType
): UserPageType => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    }
    case "UNFOLLOW": {
      console.log(
        updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        })
      );

      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    }
    case "SET_USERS": {
      return { ...state, users: action.users };
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "SET_TOTAL_USERS_COUNT": {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    case FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(
              (id: number) => id !== action.userId
            ),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId: number): FollowActionType => {
  return {
    type: "FOLLOW",
    userId,
  };
};
export const unFollowSuccess = (userId: number): UnFollowActionType => {
  return {
    type: "UNFOLLOW",
    userId,
  };
};
export const setUsers = (users: UsersType[]): SetUsersType => {
  return {
    type: "SET_USERS",
    users,
  };
};
export const setCurrentPage = (currentPage: number): SetCurrentPageAction => {
  return {
    type: "SET_CURRENT_PAGE",
    currentPage,
  };
};
export const setTotalUsersCount = (
  totalUsersCount: number
): SetTotalUsersCountActionType => {
  return {
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount,
  };
};
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => {
  return {
    type: "TOGGLE_IS_FETCHING",
    isFetching,
  };
};
export const followingInProgressAC = (
  isFetching: boolean,
  userId: number
): FollowingInProgressType => {
  return {
    type: FOLLOWING_IN_PROGRESS,
    userId,
    isFetching,
  };
};

//THUNKS
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return async (dispatch: Dispatch<AppActionsType>) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    console.log(data.items);

    dispatch(setTotalUsersCount(data.totalCount));
  };
};
const followUnFollowFlow = async (
  dispatch: Dispatch<AppActionsType>,
  userId: number,
  apiMethod: (userId: number) => void,
  actionCreator: (userId: number) => UserReducerActionsType
) => {
  dispatch(followingInProgressAC(true, userId));
  let response: any = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(followingInProgressAC(false, userId));
};

export const follow = (userId: number) => {
  return async (dispatch: Dispatch<AppActionsType>) => {
    followUnFollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};

export const unFollow = (userId: number) => {
  return async (dispatch: Dispatch<AppActionsType>) => {
    followUnFollowFlow(
      dispatch,
      userId,
      usersAPI.unFollow.bind(usersAPI),
      unFollowSuccess
    );
  };
};
