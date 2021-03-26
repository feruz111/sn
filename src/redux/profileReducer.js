let ADD_POST = "ADD-POST";
let UPDATE_POST = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "it's first", likesCount: 24 },
    { id: 3, message: "yo" },
    { id: 4, message: "yo" },
    { id: 5, message: "yo" },
  ],
  newPostText: "it-kamasutra",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
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

    case UPDATE_POST: {
      return { ...state, newPostText: action.text };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST,
    text,
  };
};
