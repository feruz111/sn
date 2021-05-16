import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { AppActionsType, RootStoreType } from "../../../redux/store";
import MyPosts from "./MyPosts";

let mapStateToProps = (state: RootStoreType) => {
  return {
    posts: state.profilePage.posts,
  };
};

let mapDispatchToProps = (dispatch: Dispatch<AppActionsType>) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

const MyPostsContainer: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
