import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  updateStatusThunkCreator,
  getStatusThunkCreator,
  getUserProfileThunkCreator,
  savePhoto,
  ProfileType,
} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router";
import { RootStoreType } from "../../redux/redux-store";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import Preloader from "../Common/Preloader/Preloader";

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
  setUserProfile: (profile: ProfileType) => void;
  getUserProfileThunkCreator: (userId: string) => void;
  getStatusThunkCreator: (userId: string) => void;
  updateStatusThunkCreator: (status: string) => void;
  savePhoto: (file: File) => void;
};

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<PropsType, {}> {
  refreshProfile() {
    let userId: any = this.props.match.params.userId;
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

  componentDidUpdate(prevProps: PropsType, prevState: any, snapshot: any) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }

    // console.log("RENDER PROFILE");
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        reduxStatus={this.props.reduxStatus}
        updateStatusThunkCreator={this.props.updateStatusThunkCreator}
        savePhoto={this.props.savePhoto}
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

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    getUserProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    savePhoto,
  }),
  withRouter
)(ProfileContainer);
