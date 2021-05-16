import React from "react";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import {
  DialogsType,
  MessagesPageType,
  MessagesType,
} from "../../redux/dialogs-reducer";
import { Redirect } from "react-router";
import { Field, Form, reduxForm } from "redux-form";
import { AddMessageFormRedux } from "./Forms/AddMessageForm";

export type DialogsPageType = {
  newPostText: string;
  messagesPage: MessagesPageType;
  addMessage: (a: string) => void;
  isAuth: boolean;
};

export type NewMessageFormValuesType = {
  addMessage: string
}

const Dialogs: React.FC<DialogsPageType> = (props) => {
  let messagesPage = props.messagesPage;

  let onAddMessageHandler = (value: any) => {
    props.addMessage(value.addMessage);
  };

  let dialogsElements = messagesPage.dialogs.map((d: DialogsType) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messagesPage.messages.map((m: MessagesType) => (
    <Messages message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={onAddMessageHandler} />
      </div>
    </div>
  );
};

export default Dialogs;
