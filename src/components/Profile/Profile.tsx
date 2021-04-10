import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    profile: any 
}

const Profile: React.FC<ProfileType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
