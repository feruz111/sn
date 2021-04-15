import { authAPI } from "../api/api";

let SET_USER_DATA = "SET_USER_DATA";

export type AuthStateType = {
  userId: string | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

let initialState: AuthStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  action: ActionsType
): AuthStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.data, isAuth: true };
    }
    default:
      return state;
  }
};

type ActionsType = SetAuthUserDataType;

type SetAuthUserDataType = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (
  userId: string,
  email: string,
  login: string
) => {
  return {
    type: SET_USER_DATA,
    data: { userId, email, login },
  };
};
export const getAuthUserDataThunkCreator = () => {
  return (dispatch:any) => {//any
    authAPI.authMeAPI().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login))
      }
    });
  }
};

