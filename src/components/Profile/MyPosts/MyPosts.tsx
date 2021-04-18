import React from "react";
import { Field, reduxForm } from "redux-form";
import { PostsType, ProfilePageType } from "../../../redux/profileReducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
  posts: Array<PostsType>;
  newPostText: string;
  updateNewPostText: (text: string) => void;
  addPost: (newPostText:string) => void;
};

const MyPosts = (props: PropsType) => {
  let postsElements = props.posts.map((p: PostsType) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  let onSubmitHandler = (value:any) => {
    props.addPost(value);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostsFormRedux onSubmit={onSubmitHandler} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const MyPostsForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        name={"addPost"}
        placeholder={"enter text"}
      />
      <div>
        <button>Add posts</button>
      </div>
    </form>
  );
};

const MyPostsFormRedux = reduxForm({ form: "addPost" })(MyPostsForm);

export default MyPosts;
