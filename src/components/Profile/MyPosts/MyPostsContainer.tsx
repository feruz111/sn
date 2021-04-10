import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import { RootStoreType } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

let mapStateToProps = (state: RootStoreType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateNewPostText: (text: string) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
