import { Field, InjectedFormProps, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { TextArea } from "../../Common/FormsControls/FormsControls";
import s from "../Dialogs.module.css";

const maxLen = maxLengthCreator(30);

const AddMessageForm = (props: InjectedFormProps) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[required, maxLen]}
        placeholder="Enter your message"
        name={"addMessage"}
        component={TextArea}
      />
      <button className={s.addMessageButton}>Add message</button>
    </form>
  );
};

export const AddMessageFormRedux = reduxForm({ form: "addMessage" })(
  AddMessageForm
);
