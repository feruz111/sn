import React from "react";
import { Field, reduxForm } from "redux-form";
import { LoginReduxForm } from "./Forms/LoginReduxForm";



const Login = () => {
  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
