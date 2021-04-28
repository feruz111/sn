import React from "react";
import { Field, reduxForm } from "redux-form";
import { PostsType, ProfilePageType } from "../../../redux/profileReducer";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { AddNewPostFormRedux } from "./AddNewPostForm";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
  posts: Array<PostsType>;
  newPostText: string;
  updateNewPostText: (text: string) => void;
  addPost: (newPostText: string) => void;
};

const MyPosts = React.memo((props: PropsType) => {
  console.log(("render"));
  
  let postsElements = props.posts.map((p: PostsType) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  let onSubmitHandler = (value: any) => {
    props.addPost(value.addPost);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onSubmitHandler} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
