import React from "react";
import { Redirect } from "react-router";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    profile: any 
    isAuth?:boolean
    reduxStatus: string
    updateStatusThunkCreator: (string:string) => void
}

const Profile: React.FC<ProfileType> = (props) => {

  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile} reduxStatus={props.reduxStatus} updateStatusThunkCreator={props.updateStatusThunkCreator}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
