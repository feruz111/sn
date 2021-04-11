import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer";
import axios from "axios";
import { RootStoreType } from "../../redux/redux-store";
import { authAPI } from "../../api/api";

type HeaderContainerType = {
  isAuth: boolean;
  login: string | null;
  setAuthUserData: (id: string, email: string, login: string) => void;
};

class HeaderContainer extends React.Component<HeaderContainerType, {}> {
  componentDidMount() {
    authAPI.authMeAPI().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state: RootStoreType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
