import React from "react";
import { connect } from "react-redux";
import { logoutTC, setAuthUserData } from "../../redux/auth-reducer";
import { RootStoreType } from "../../redux/store";
import Header from "./Header";

type MSTPType = {
  isAuth: boolean;
  login: string | null;
};

type MDTPType = {
  setAuthUserData: (
    id: string,
    email: string,
    login: string,
    isAuth: boolean
  ) => void;
  logoutTC: () => void;
};

type PropsType = MSTPType & MDTPType;

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state: RootStoreType): MSTPType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export const HeaderContainerWrap = connect<
  MSTPType,
  MDTPType,
  {},
  RootStoreType
>(mapStateToProps, {
  setAuthUserData,
  logoutTC,
})(HeaderContainer);
