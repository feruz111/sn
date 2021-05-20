import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {LoginReduxForm} from "./Forms/LoginReduxForm";
import {loginTC} from "../../redux/auth-reducer";
import {RootStoreType} from "../../redux/store";
import {Redirect} from "react-router";
import styles from "./Login.module.css";

type LoginPropsType = {
    loginTC: (
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: string
    ) => Promise<void>;
    captchaUrl: string | null;
    isAuth: boolean;
};

type formDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
};

const Login = ({isAuth, loginTC, captchaUrl}: LoginPropsType) => {
    const onSubmit = (formData: formDataType) => {
        loginTC(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        );
    };

    if (isAuth) {
        return <Redirect to={"/profile"}/>;
    }

    return (
        <div className={styles.loginPage}>
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            </div>
        </div>
    );
};

let mapStateToProps = (state: RootStoreType) => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, {loginTC})(Login);


{
    /* <div className={styles.loginPage}>
  {isAuth ? (
    <Redirect to={"/profile"} />
  ) : (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  )}
  </div> */
}
