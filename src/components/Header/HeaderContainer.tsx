import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {
  getAuthUserDataThunkCreator,
  setAuthUserData,
  logoutTC,
} from "../../redux/auth-reducer";
import axios from "axios";
import { RootStoreType } from "../../redux/redux-store";

type HeaderContainerType = {
  isAuth: boolean;
  login: string | null;
  setAuthUserData: (id: string, email: string, login: string) => void;
  getAuthUserDataThunkCreator: () => void;
  logoutTC: () => void;
};

class HeaderContainer extends React.Component<HeaderContainerType, any> {
  componentDidMount() {
    this.props.getAuthUserDataThunkCreator();
  }

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

export const HeaderContainerWrap: any = connect(mapStateToProps, {
  setAuthUserData,
  getAuthUserDataThunkCreator,
  logoutTC,
})(HeaderContainer);
