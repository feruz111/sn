import React, { useEffect } from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router";
import { RootStoreType } from "../../redux/redux-store";
import { profileFollowAPI } from "../../api/api";

type PathParamsType = {
  userId: string | undefined;
};

type MapStatePropsType = {
  profile: any;
};
type MapDispatchPropsType = {
  setUserProfile: (profile: any) => void;
};

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

function ProfileContainer(props: PropsType) {
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    profileFollowAPI.profileAPI(userId).then((data: any) => {// any
      props.setUserProfile(data);
    });
  }, []);
  return <Profile {...props} profile={props.profile} />;
}

let mapStateToProps = (state: RootStoreType): MapStatePropsType => ({
  profile: state.profilePage.profile,
});

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithURLDataContainerComponent
);
