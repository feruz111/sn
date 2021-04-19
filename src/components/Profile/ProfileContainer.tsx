import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  updateStatusThunkCreator,
  getStatusThunkCreator,
  getUserProfileThunkCreator,
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
  reduxStatus: string
  authorizedUserId: string | null
};
type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void;
  getUserProfileThunkCreator: (userId: string) => void;
  getStatusThunkCreator: (userId:string) => void
  updateStatusThunkCreator: (status:string) => void
};

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

function ProfileContainer(props: PropsType) {
  useEffect(() => {
    let userId:any = props.match.params.userId;
    if (!userId) {
      userId = props.authorizedUserId
    }
    props.getUserProfileThunkCreator(userId);
    props.getStatusThunkCreator(userId);
  }, []);
  if (!props.profile) {
    return <Preloader />;
  }

  return <Profile {...props} profile={props.profile} reduxStatus={props.reduxStatus} updateStatusThunkCreator={props.updateStatusThunkCreator} />;
}

let mapStateToProps = (state: RootStoreType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  reduxStatus: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

// let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// export default connect(mapStateToProps, {
//   setUserProfile,
//   getUserProfileThunkCreator,
// })(WithURLDataContainerComponent);

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { getUserProfileThunkCreator,getStatusThunkCreator,updateStatusThunkCreator }),
  withRouter
)(ProfileContainer);
