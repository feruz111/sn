export type UsersType = {
  id: number
  photoUrl: string
  followed: boolean
  name: string
  status: string
}

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
  users: Array<UsersType> | Array<any>;
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

export type UserPageType = {
  users: [] | Array<UsersType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
};


type ActionsType =
  | FollowActionType
  | UnFollowActionType
  | SetUsersType
  | SetCurrentPageAction
  | SetTotalUsersCountActionType
  | ToggleIsFetchingType;

  
let initialState: UserPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
};

export const userReducer = (state = initialState, action: ActionsType): UserPageType => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((u: UsersType) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((u: UsersType) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
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
    default:
      return state;
  }
};

export const follow = (userId: number): FollowActionType => {
  return {
    type: "FOLLOW",
    userId,
  };
};
export const unFollow = (userId: number): UnFollowActionType => {
  return {
    type: "UNFOLLOW",
    userId,
  };
};
export const setUsers = (users: any): SetUsersType => {
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
