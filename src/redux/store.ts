import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { authReducer, AuthReducerActionsType } from "./auth-reducer";
import { dialogReducer, DialogsReducerActionsType } from "./dialogs-reducer";
import { profileReducer, ProfileReducerActionsType } from "./profile-reducer";
import { userReducer, UserReducerActionsType } from "./users-reducer";
import { reducer as formReducer } from "redux-form";
import { appReducer, AppReducerActionsType } from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  userPage: userReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

export type RootStoreType = ReturnType<typeof reducers>;

export type AppActionsType =
  | AppReducerActionsType
  | AuthReducerActionsType
  | DialogsReducerActionsType
  | ProfileReducerActionsType
  | UserReducerActionsType;

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStoreType,
  unknown,
  AppActionsType
>;

let store = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store;

export default store;
