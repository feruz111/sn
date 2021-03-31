import { combineReducers, createStore } from "redux";
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

let store = createStore(reducers);
window.store = store;

export default store;
