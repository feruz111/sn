import { ProfileType } from "../../../redux/profileReducer";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/user.png";
import { ChangeEvent } from "react";

export type ProfileInfoType = {
  profile: ProfileType;
  reduxStatus: string;
  isOwner: boolean;
  updateStatusThunkCreator: (status: string) => void;
  savePhoto: (file: File) => void;
};

const ProfileInfo = ({
  profile,
  reduxStatus,
  isOwner,
  updateStatusThunkCreator,
  savePhoto,
}: ProfileInfoType) => {
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks
          reduxStatus={reduxStatus}
          updateStatusThunkCreator={updateStatusThunkCreator}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
