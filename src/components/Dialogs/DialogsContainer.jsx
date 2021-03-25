import React from "react";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { addMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let messagesPage = props.store.getState().messagesPage;

  let onAddMessageHandler = (text) => {
    props.store.dispatch(addMessageActionCreator(text));
  };

  return (
    <Dialogs addMessage={onAddMessageHandler} messagesPage={messagesPage} />
  );
};

export default DialogsContainer;
