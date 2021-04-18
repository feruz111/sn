import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Input } from "../../Common/FormsControls/FormsControls";

const maxLen = maxLengthCreator(10);

const LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLen]}
          placeholder={"Login"}
          name={"login"}
          component={Input}
        />
      </div>
      <div>
        <Field validate={[required, maxLen]} placeholder={"Password"} name={"password"} component={Input} />
      </div>
      <div>
        <Field validate={[required, maxLen]} component={Input} name={"rememberMe"} type="checkbox" />
        Remember me
      </div>
      <button>Login</button>
    </form>
  );
};

export const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
