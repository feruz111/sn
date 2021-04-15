import React from "react";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { DialogsType, MessagesPageType, MessagesType } from "../../redux/dialogsReducer";
import { Redirect } from "react-router";

type DialogsPageType = {
  newPostText: string,
  messagesPage: MessagesPageType,
  addMessage: (a: string) => void,
  isAuth: boolean
}

const Dialogs: React.FC<DialogsPageType>  = (props) => {
  let newMessage: any = React.createRef<HTMLTextAreaElement>(); // any
  let messagesPage = props.messagesPage;

  let onChangeHandler = () => {
    let text = newMessage.current.value;
    props.addMessage(text);
    console.log(props.newPostText);
    
  };

  let dialogsElements = messagesPage.dialogs.map((d: DialogsType) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messagesPage.messages.map((m: MessagesType) => (
    <Messages message={m.message} />
  ));

  if(props.isAuth === false) return < Redirect to={"/login"}/>

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessage}></textarea>
          <button onClick={onChangeHandler}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
