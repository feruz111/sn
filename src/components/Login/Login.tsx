import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { loginTC } from "../../redux/auth-reducer";
import { RootStoreType } from "../../redux/store";
import { LoginReduxForm } from "./Forms/LoginReduxForm";
import styles from "./Login.module.css";

type MSTPT = {
  captchaUrl: string | null;
  isAuth: boolean;
};

type MDTPT = {
  loginTC?: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
};

type formDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type PropsType = MSTPT & MDTPT;

const Login = ({ isAuth, loginTC, captchaUrl }: PropsType) => {
  const onSubmit = (formData: formDataType) => {
    loginTC &&
      loginTC(
        formData.email,
        formData.password,
        formData.rememberMe,
        formData.captcha
      );
  };

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={styles.loginPage}>
      <div>
        <h1>Login</h1>
        <div className={styles.demoAcc}>
          <strong className={styles.strong}>Demo account:</strong> free@samuraijs.com
        </div>
        <div className={styles.demoAcc}>
          <strong className={styles.strong}>Password: </strong> free
        </div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
      </div>
    </div>
  );
};

let mapStateToProps = (state: RootStoreType): MSTPT => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default connect<MSTPT, MDTPT, {}, RootStoreType>(mapStateToProps, {
  loginTC,
})(Login);
