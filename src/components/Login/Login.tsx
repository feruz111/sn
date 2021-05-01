import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { LoginReduxForm } from "./Forms/LoginReduxForm";
import { loginTC } from "../../redux/auth-reducer";
import { RootStoreType } from "../../redux/redux-store";
import { Redirect } from "react-router";

// type LoginPropsType = {
//   loginTC: (email: string, password: string, rememberMe: string) => void;
// };

const Login = ({ isAuth, loginTC, captchaUrl }: any) => {
  // any
  const onSubmit = (formData: any) => {
    //any
    loginTC(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (isAuth) {
    <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

let mapStateToProps = (state: RootStoreType) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginTC })(Login);
