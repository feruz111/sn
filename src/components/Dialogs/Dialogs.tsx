import React from "react";
import {
  DialogsType,
  MessagesPageType,
  MessagesType
} from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { AddMessageFormRedux } from "./Forms/AddMessageForm";
import Messages from "./Message/Message";

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
