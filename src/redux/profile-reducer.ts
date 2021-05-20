import { AppActionsType, AppThunkType, RootStoreType } from "./store";
import { profileAPI } from "../api/api";
import { usersAPI } from "../api/api";
import { Dispatch } from "redux";
import { stopSubmit } from "redux-form";
import { ProfilePutTypes } from "../api/types";

const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

export type AddPostActionType = {
  type: "ADD-POST";
  newPostText: string;
};
export type UpdateNewPostTextActionType = {
  type: "UPDATE-NEW-POST-TEXT";
  text: string;
};
export type SetUserProfileActionType = {
  type: "SET_USER_PROFILE";
  profile: ProfileType;
};
export type SetStatusActionType = {
  type: "SET_STATUS";
  status: string;
};
export type DeletePostType = {
  type: "DELETE_POST";
  postId: number;
};

export type SavePhotoSuccessType = {
  type: "SAVE_PHOTO_SUCCESS";
  photos: PhotosType;
};
export type PostsType = {
  id: number;
  message: string;
  likesCount?: number;
};

export type ProfilePageType = {
  posts: Array<PostsType>;
  profile: null | ProfileType;
  status: string;
};

export type ProfileType = {
  userId: string | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
  aboutMe: string;
};

type PhotosType = {
  small: string;
  large: string;
};
type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

let initialState: ProfilePageType = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "it's first", likesCount: 24 },
    { id: 3, message: "yo", likesCount: 0 },
    { id: 4, message: "yo", likesCount: 10 },
    { id: 5, message: "yo", likesCount: 0 },
  ],
  profile: null,
  status: "",
};

export type ProfileReducerActionsType =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | SetUserProfileActionType
  | SetStatusActionType
  | DeletePostType
  | SavePhotoSuccessType;

export const profileReducer = (
  state = initialState,
  action: ProfileReducerActionsType
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: action.newPostText,
            likesCount: 0,
          },
        ],
      };
    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        //@ts-ignore
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (
  newPostText: string
): AddPostActionType => {
  return {
    type: "ADD-POST",
    newPostText,
  };
};

export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => {
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
export const deletePost = (postId: number): DeletePostType => {
  return {
    type: DELETE_POST,
    postId,
  };
};
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};

//THUNKS
export const getUserProfileThunkCreator = (
  userId: string | null
): AppThunkType => {
  return async (dispatch: Dispatch<AppActionsType>) => {
    let response = await usersAPI.profileAPI(userId);
    dispatch(setUserProfile(response.data));
  };
};
export const getStatusThunkCreator = (userId: string) => {
  return async (dispatch: Dispatch<AppActionsType>) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatusAC(response.data));
  };
};
export const updateStatusThunkCreator = (status: string) => {
  return async (dispatch: Dispatch<AppActionsType>) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  };
};

export const savePhoto = (file: File) => {
  return async (dispatch: Dispatch<AppActionsType>) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
  };
};
export const saveProfile = (profile: ProfilePutTypes): AppThunkType => {
  return async (dispatch, getState: () => RootStoreType) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfileThunkCreator(userId));
    } else {
      dispatch(
        stopSubmit("edit-profile", { _error: response.data.messages[0] })
      );
      return Promise.reject(response.data.messages[0]);
    }
  };
};
