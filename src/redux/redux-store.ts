import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth-reducer";
import { dialogReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { userReducer } from "./usersReducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogReducer,
  userPage: userReducer,
  auth: authReducer,
  form: formReducer,
});

export type RootStoreType = ReturnType<typeof reducers>;

let store = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store;

export default store;
