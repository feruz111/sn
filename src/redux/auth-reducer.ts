import { Dispatch } from "redux";
import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

let SET_USER_DATA = "social-network/auth/SET_USER_DATA";

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
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

type ActionsType = SetAuthUserDataType;

type SetAuthUserDataType = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (
  userId: string | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};
export const getAuthUserDataThunkCreator = () => {
  return async (dispatch: Dispatch) => {
    //any
    let response = await authAPI.authMeAPI();
    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };
};
export const loginTC = (
  email: string,
  password: string,
  rememberMe: boolean
) => {
  return async (dispatch: any) => {
    //any
    let response: any = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};

export const logoutTC = () => {
  return async (dispatch: any) => {
    //any
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, true));
    }
  };
};
