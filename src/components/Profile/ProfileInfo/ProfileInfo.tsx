import { ChangeEvent, useState } from "react";
import userPhoto from "../../../assets/user.svg";
import { ProfileType } from "../../../redux/profile-reducer";
import { ProfileData } from "./ProfileData/ProfileData";
import ProfileDataFormReduxForm from "./ProfileData/ProfileDataForm";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

export type ProfileInfoType = {
  profile: ProfileType; // ProfileType
  reduxStatus: string;
  isOwner: boolean;
  updateStatusThunkCreator: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProflie: any;
};

const ProfileInfo = ({
  profile,
  reduxStatus,
  isOwner,
  updateStatusThunkCreator,
  savePhoto,
  saveProflie,
}: ProfileInfoType) => {
  let [editMode, setEditMode] = useState<boolean>(false);

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (formData: any) => {
    console.log(formData);

    saveProflie(formData).then(() => {
      setEditMode(false);
    });
  };
  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={s.userPhotoContainer}>
          <img
            src={profile.photos.large || userPhoto}
            className={s.mainPhoto}
          />
          <div>
            {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
          </div>
        </div>
        {editMode ? (
          <ProfileDataFormReduxForm
            initialValue={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => setEditMode(true)}
            isOwner={isOwner}
            profile={profile}
          />
        )}
        <ProfileStatusWithHooks
          reduxStatus={reduxStatus}
          updateStatusThunkCreator={updateStatusThunkCreator}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
