import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth-reducer";
import { dialogReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { userReducer } from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  userPage: userReducer,
  auth: authReducer
});

export type RootStoreType = ReturnType<typeof reducers>

let store = createStore(reducers,applyMiddleware(thunk));

// @ts-ignore
window.store = store;

export default store;
