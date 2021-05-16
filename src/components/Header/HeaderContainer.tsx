import React, { ComponentType } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData, logoutTC } from "../../redux/auth-reducer";
import { RootStoreType } from "../../redux/store";

type HeaderContainerType = {
  isAuth: boolean;
  login: string | null;
  setAuthUserData: (id: string, email: string, login: string) => void;
  getAuthUserDataThunkCreator: () => void;
  logoutTC: () => void;
};

class HeaderContainer extends React.Component<HeaderContainerType> {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state: RootStoreType): any => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export const HeaderContainerWrap:any = connect(mapStateToProps, {
  setAuthUserData,
  logoutTC,
})(HeaderContainer);
