import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import { store } from "../../../redux/store";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  console.log(props);
  let postsElements = props.profilePosts.posts.map((p) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    console.log(store._state.profilePage)
    props.dispatch(addPostActionCreator())
    newPostElement.current.value = "";
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={props.profilePosts.newPostText}
            ref={newPostElement}
            onChange={onPostChange}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add posts</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
