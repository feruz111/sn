import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addPostActionCreator } from "../../../redux/profileReducer";
import { RootStoreType } from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

let mapStateToProps = (state: RootStoreType) => {
  return {
    posts: state.profilePage.posts,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

const MyPostsContainer:any = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
