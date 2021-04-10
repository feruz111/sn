import React from "react";
import { PostsType, ProfilePageType } from "../../../redux/profileReducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
  posts: Array<PostsType>
  newPostText: string
  updateNewPostText: (text: string) => void
  addPost: () => void
}

const MyPosts = (props: PropsType) => {
  let postsElements = props.posts.map((p: PostsType) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  let newPostElement: any = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={props.newPostText}
            ref={newPostElement}
            onChange={onPostChange}
          ></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add posts</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
