import { profileAPI } from "./../api/api";
import { usersAPI } from "../api/api";

const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

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
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
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
    { id: 3, message: "yo" },
    { id: 4, message: "yo" },
    { id: 5, message: "yo" },
  ],
  profile: null,
  status: "",
};

export type ProfileActionsType =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | SetUserProfileActionType
  | SetStatusActionType
  | DeletePostType;

export const profileReducer = (
  state = initialState,
  action: ProfileActionsType
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

//THUNKS
export const getUserProfileThunkCreator = (userId: string) => {
  return async (dispatch: any) => {
    let response = await usersAPI.profileAPI(userId);
    // any
    dispatch(setUserProfile(response.data));
  };
};
export const getStatusThunkCreator = (userId: string) => {
  return async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    // any
    dispatch(setStatusAC(response.data));
  };
};
export const updateStatusThunkCreator = (status: string) => {
  return async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      // any
      dispatch(setStatusAC(status));
    }
  };
};
