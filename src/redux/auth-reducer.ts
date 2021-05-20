import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";
import { loginAuthPostType } from "../api/types";
import { AppActionsType, AppThunkType } from "./store";

let SET_USER_DATA = "social-network/auth/SET_USER_DATA";
let GET_CAPTCHA_URL_SUCCESS = "social-network/auth/GET_CAPTCHA_URL_SUCCESS";

export type AuthStateType = {
  userId: string | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: null | string;
};

let initialState: AuthStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

export const authReducer = (
  state = initialState,
  action: AuthReducerActionsType
): AuthStateType => {
  switch (action.type) {
    case GET_CAPTCHA_URL_SUCCESS:
    case SET_USER_DATA: {
      console.log(action.payload);

      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export type AuthReducerActionsType =
  | SetAuthUserDataType
  | getCaptchaUrlSuccessType;

export type SetAuthUserDataType = ReturnType<typeof setAuthUserData>;
export type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>;

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
export const getCaptchaUrlSuccess = (captchaUrl: string) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl },
  };
};

//Thunks

export const getAuthUserDataThunkCreator = () => {
  return async (dispatch: Dispatch<AuthReducerActionsType>) => {
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
  rememberMe: boolean,
  captcha: string
): AppThunkType => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator());
    } else {
      if (response.data.resultCode === 10) {
        await dispatch(getCaptchaUrl());
      }
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};

export const logoutTC = () => {
  return async (dispatch: Dispatch<AppActionsType>) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};
export const getCaptchaUrl = () => {
  return async (dispatch: Dispatch<AppActionsType>) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
  };
};
