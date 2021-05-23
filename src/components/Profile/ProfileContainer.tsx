import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from "redux";
import { ProfilePutTypes } from "../../api/types";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {
  getStatusThunkCreator,
  getUserProfileThunkCreator,


  ProfileType, savePhoto,
  saveProfile, updateStatusThunkCreator
} from "../../redux/profile-reducer";
import { RootStoreType } from "../../redux/store";
import Preloader from "../Common/Preloader/Preloader";
import Profile from "./Profile";

type PathParamsType = {
  userId: string | undefined;
};

type MapStatePropsType = {
  profile?: ProfileType | null;
  isAuth?: boolean;
  reduxStatus: string;
  authorizedUserId: string | null;
};
type MapDispatchPropsType = {
  setUserProfile?: (profile: ProfileType) => void;
  getUserProfileThunkCreator: (userId: string) => void;
  getStatusThunkCreator: (userId: string) => void;
  updateStatusThunkCreator: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (data: ProfilePutTypes) => void;
};

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<PropsType, {}> {
  refreshProfile() {
    let userId: any = this.props.match.params.userId;
    console.log(userId);

    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfileThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }

    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        reduxStatus={this.props.reduxStatus}
        updateStatusThunkCreator={this.props.updateStatusThunkCreator}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

let mapStateToProps = (state: RootStoreType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  reduxStatus: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export const WithProfileContainer = compose<ComponentType>(
  withAuthRedirect,
  connect<MapStatePropsType, MapDispatchPropsType, {}, RootStoreType>(
    mapStateToProps,
    {
      getUserProfileThunkCreator,
      getStatusThunkCreator,
      updateStatusThunkCreator,
      savePhoto,
      saveProfile,
    }
  ),
  withRouter
)(ProfileContainer);
