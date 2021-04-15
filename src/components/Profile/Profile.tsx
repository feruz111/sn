import React from "react";
import { Redirect } from "react-router";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    profile: any 
    isAuth:boolean
}

const Profile: React.FC<ProfileType> = (props) => {
  if(props.isAuth === false) return < Redirect to={"/login"}/>

  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
