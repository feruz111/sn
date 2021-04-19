import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { LoginReduxForm } from "./Forms/LoginReduxForm";
import { loginTC } from "../../redux/auth-reducer";
import { RootStoreType } from "../../redux/redux-store";
import { Redirect } from "react-router";

// type LoginPropsType = {
//   loginTC: (email: string, password: string, rememberMe: string) => void;
// };

const Login = (props: any) => {
  // any
  const onSubmit = (formData: any) => {
    //any
    props.loginTC(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = (state: RootStoreType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginTC })(Login);
