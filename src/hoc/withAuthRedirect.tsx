import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootStoreType } from "../redux/store";

type mstpType = {
  isAuth: boolean;
};

function mstp(state: RootStoreType): mstpType {
  return {
    isAuth: state.auth.isAuth,
  };
}

function withAuthRedirect<T>(Component: ComponentType<T>) {
  function RedirectComponent(props: mstpType) {
    const { isAuth, ...restProps } = props;

    if (!props.isAuth) return <Redirect to="/login" />;

    return <Component {...(restProps as T)} />;
  }

  return connect<mstpType, any, any, any>(mstp)(RedirectComponent);
}

export default withAuthRedirect;
