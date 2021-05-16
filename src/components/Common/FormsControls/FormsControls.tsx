import React, { ComponentType } from "react";
import { Field } from "redux-form";
import styles from "./FormsControls.module.css";
import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form/lib/Field";
import { FieldValidatorType } from "../../../utils/validators/validators";

type PropsType = {
  input: string;
  meta: WrappedFieldMetaProps;
};

export const FormControl: React.FC<PropsType> = ({
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

export const TextArea: React.FC<PropsType> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
export const Input: React.FC<PropsType> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder: string | null,
  name: string,
  validators: Array<FieldValidatorType>,
  component: React.FC<any>,
  props = {},
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
