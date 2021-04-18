import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { TextArea } from "../../Common/FormsControls/FormsControls";

const maxLen = maxLengthCreator(10);

const AddNewPostForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={TextArea}
        name={"addPost"}
        placeholder={"enter text"}
        validate={[required,maxLen]}
      />
      <div>
        <button>Add posts</button>
      </div>
    </form>
  );
};

export const AddNewPostFormRedux = reduxForm({ form: "addPost" })(
  AddNewPostForm
);
