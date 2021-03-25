import { dialogReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likesCount: 12 },
        { id: 2, message: "it's first", likesCount: 24 },
        { id: 3, message: "yo" },
        { id: 4, message: "yo" },
        { id: 5, message: "yo" },
      ],
      newPostText: "it-kamasutra",
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Andrey" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "how is your it-kamasutra" },
        { id: 3, message: "yo" },
        { id: 4, message: "yo" },
        { id: 5, message: "yo" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  },
};
