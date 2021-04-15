import { usersAPI } from "../api/api";

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

export type PostsType = {
  id: number;
  message: string;
  likesCount?: number;
};

export type ProfilePageType = {
  posts: Array<PostsType>;
  newPostText: string;
  profile: null | string;
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
};

export type ProfileActionsType =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | SetUserProfileActionType;

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
export const getUserProfileThunkCreator = (userId: string) => {
  return (dispatch: any) => {
    usersAPI.profileAPI(userId).then((data: any) => {// any
      dispatch(setUserProfile(data));
    });
  };
};
