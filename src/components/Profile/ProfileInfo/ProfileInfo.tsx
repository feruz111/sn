import { ProfileType } from "../../../redux/profileReducer";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

export type ProfileInfoType = {
  profile: ProfileType;
  reduxStatus: string;
  updateStatusThunkCreator: (status: string) => void;
};

const ProfileInfo = ({
  profile,
  updateStatusThunkCreator,
  reduxStatus,
}: ProfileInfoType) => {
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks
          reduxStatus={reduxStatus}
          updateStatusThunkCreator={updateStatusThunkCreator}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
