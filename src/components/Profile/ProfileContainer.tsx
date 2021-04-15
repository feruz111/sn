import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile,getUserProfileThunkCreator } from "../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router";
import { RootStoreType } from "../../redux/redux-store";
import { usersAPI } from "../../api/api";

type PathParamsType = {
  userId: string | undefined;
};

type MapStatePropsType = {
  profile: any;
  isAuth:boolean
};
type MapDispatchPropsType = {
  setUserProfile: (profile: any) => void;
  getUserProfileThunkCreator: (userId:string) => void
};

type OwnPropsType = MapStatePropsType & MapDispatchPropsType;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

function ProfileContainer(props: PropsType) {
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    props.getUserProfileThunkCreator(userId)
  }, []);
  return <Profile {...props} profile={props.profile} />;
}

let mapStateToProps = (state: RootStoreType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile,getUserProfileThunkCreator })(
  WithURLDataContainerComponent
);
