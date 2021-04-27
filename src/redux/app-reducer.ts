import { Dispatch } from "redux";
import { authAPI } from "../api/api";
import { getAuthUserDataThunkCreator } from "./auth-reducer";

let INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type AppInitializedState = {
  initialized: boolean;
};

let initialState: AppInitializedState = {
  initialized: false,
};

export const appReducer = (
  state = initialState,
  action: ActionsType
): AppInitializedState => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return { ...state, initialized: true };
    }
    default:
      return state;
  }
};

type ActionsType = SetAuthUserDataType;

type SetAuthUserDataType = ReturnType<typeof initializedSuccess>;

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeApp = () => {
  return (dispatch: Dispatch) => {
    //@ts-ignore
    let promise = dispatch(getAuthUserDataThunkCreator());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};
