import { stopSubmit } from "redux-form";
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
  return (dispatch: any) => {
    //any
    authAPI.authMeAPI().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};
export const loginTC = (
  email: string,
  password: string,
  rememberMe: boolean
) => {
  return (dispatch: any) => {
    //any
    authAPI.login(email, password, rememberMe).then((response: any) => {
      if (response.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0]: "some error"
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};

export const logoutTC = () => {
  return (dispatch: any) => {
    //any
    authAPI.logout().then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, true));
      }
    });
  };
};
