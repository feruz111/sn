import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { createField, Input } from "../../Common/FormsControls/FormsControls";
import styles from "../../Common/FormsControls/FormsControls.module.css";

// type LoginFormPropsType = {
//   handleSubmit: () => void;
//   error: boolean;
// };

const maxLen = maxLengthCreator(100);

const LoginForm = ({ handleSubmit, error }: any) => {
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
        {error && <div className={styles.formSubmissoinError}>{error}</div>}
        <button>Login</button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
