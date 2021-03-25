import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src="https://i.ytimg.com/vi/o_26SGY83-I/movieposter_en.jpg" />
      </div>
      {props.message}
      <div>
        <span>Like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
