import React, { ComponentType } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData, logoutTC } from "../../redux/auth-reducer";
import { RootStoreType } from "../../redux/store";

type MSTPType = {
  isAuth: boolean;
  login: string | null;
}

type MDTPType = {
  setAuthUserData: (id: string, email: string, login: string, isAuth: boolean) => void;
  logoutTC: () => void;
}

type HeaderContainerType = {
  // getAuthUserDataThunkCreator: () => void;
};

type PropsType = MSTPType & MDTPType & HeaderContainerType

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

export const HeaderContainerWrap = connect<MSTPType, MDTPType, {}, RootStoreType>(mapStateToProps, {
  setAuthUserData,
  logoutTC,
})(HeaderContainer);
