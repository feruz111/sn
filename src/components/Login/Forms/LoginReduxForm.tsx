import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Input } from "../../Common/FormsControls/FormsControls";
import styles from "../../Common/FormsControls/FormsControls.module.css";


const maxLen = maxLengthCreator(100 );

const LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLen]}
          placeholder={"Email"}
          name={"email"}
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[required, maxLen]}
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[required, maxLen]}
          component={Input}
          name={"rememberMe"}
          type="checkbox"
        />
        Remember me
      </div>
      {props.error && <div className={styles.formSubmissoinError}>
        {props.error}
      </div>}
      <button>Login</button>
    </form>
  );
};

export const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
