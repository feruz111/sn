import React from "react";
import styles from "./FormsControls.module.css";

export const FormControl: React.FC<any> = ({
  input,
  meta,
  child,
  ...props
}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{props.children}</div>
      <div>{hasError && <span>{meta.error}</span>}</div>
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
