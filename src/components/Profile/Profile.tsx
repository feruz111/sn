import React from "react";
import { ProfilePutTypes } from "../../api/types";
import { ProfileType } from "../../redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  profile: ProfileType;
  isAuth?: boolean;
  reduxStatus: string;
  isOwner: boolean;
  updateStatusThunkCreator: (string: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (data: ProfilePutTypes) => void;
};

const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.content}>
      <ProfileInfo
        saveProflie={props.saveProfile}
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        reduxStatus={props.reduxStatus}
        updateStatusThunkCreator={props.updateStatusThunkCreator}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
