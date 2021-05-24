import React from "react";
import { Field } from "redux-form";
import { WrappedFieldMetaProps } from "redux-form/lib/Field";
import { FieldValidatorType } from "../../../utils/validators/validators";
import styles from "./FormsControls.module.css";

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
    <div className={styles.inputElem}>
      <Field
        validate={validators}
        placeholder={placeholder}
        name={name}
        component={component}
        {...props}
      />
      <div>{text}</div>
    </div>
  );
};
