import { profileAPI } from "./../api/api";
import { usersAPI } from "../api/api";

const SET_STATUS = "SET_STATUS";

export type AddPostActionType = {
  type: "ADD-POST";
};
export type UpdateNewPostTextActionType = {
  type: "UPDATE-NEW-POST-TEXT";
  text: string;
};
export type SetUserProfileActionType = {
  type: "SET_USER_PROFILE";
  profile: string;
};
export type SetStatusActionType = {
  type: "SET_STATUS";
  status: string;
};

export type PostsType = {
  id: number;
  message: string;
  likesCount?: number;
};

export type ProfilePageType = {
  posts: Array<PostsType>;
  newPostText: string;
  profile: null | string;
  status: string;
};

let initialState: ProfilePageType = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "it's first", likesCount: 24 },
    { id: 3, message: "yo" },
    { id: 4, message: "yo" },
    { id: 5, message: "yo" },
  ],
  newPostText: "it-kamasutra",
  profile: null,
  status: "",
};

export type ProfileActionsType =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | SetUserProfileActionType
  | SetStatusActionType;

export const profileReducer = (
  state = initialState,
  action: ProfileActionsType
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
          },
        ],
      };

    case "UPDATE-NEW-POST-TEXT": {
      return { ...state, newPostText: action.text };
    }
    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (): AddPostActionType => {
  return {
    type: "ADD-POST",
  };
};

export const updateNewPostTextActionCreator = (
  text: string
): UpdateNewPostTextActionType => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    text,
  };
};
export const setUserProfile = (profile: string): SetUserProfileActionType => {
  return {
    type: "SET_USER_PROFILE",
    profile,
  };
};
export const setStatusAC = (status: string): SetStatusActionType => {
  return {
    type: SET_STATUS,
    status,
  };
};
export const getUserProfileThunkCreator = (userId: string) => {
  return (dispatch: any) => {
    usersAPI.profileAPI(userId).then((data: any) => {
      // any
      dispatch(setUserProfile(data));
    });
  };
};
export const getStatusThunkCreator = (userId: string) => {
  return (dispatch: any) => {
    profileAPI.getStatus(userId).then((response: any) => {
      // any
      dispatch(setStatusAC(response.data));
    });
  };
};
export const updateStatusThunkCreator = (status: string) => {
  return (dispatch: any) => {
    profileAPI.updateStatus(status).then((response: any) => {
      if(response.data.resultCode === 0){
      // any
      dispatch(setStatusAC(status));
      } 
    });
  };
};
