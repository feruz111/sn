import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { createField, Input } from "../../Common/FormsControls/FormsControls";
import styles from "../../Common/FormsControls/FormsControls.module.css";

type LoginFormPropsType = {
  handleSubmit: () => void;
  error: boolean;
  captchaUrl: string | null;
};

const maxLen = maxLengthCreator(100);

const LoginForm = ({ handleSubmit, error, captchaUrl }: any) => {
  //any
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {createField("Email", "email", [required], Input)}
        {createField("Password", "password", [required], Input, {
          type: "password",
        })}
        {createField(
          null,
          "rememberMe",
          [],
          Input,
          { type: "checkbox" },
          "remember me"
        )}
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl &&
          createField("Symbols from image", "captcha", [required], Input)}
        {error && <div className={styles.formSubmissoinError}>{error}</div>}
        <button>Login</button>
      </div>
    </form>
  );
};

export const LoginReduxForm: any = reduxForm({ form: "login" })(LoginForm);
