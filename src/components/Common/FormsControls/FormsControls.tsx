import React from "react";
import { Field } from "redux-form";
import styles from "./FormsControls.module.css";

export const FormControl: React.FC<any> = ({
  input,
  meta: { touched, error },
  children,
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{children}</div>
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export const TextArea: React.FC<any> = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
export const Input: React.FC<any> = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder: string | null,
  name: string,
  validators: any,
  component: any,
  props: any = {},
  text: string = ""
) => {
  return (
    <div>
      <Field
        validate={validators}
        placeholder={placeholder}
        name={name}
        component={component}
        {...props}
      />
      {text}
    </div>
  );
};
