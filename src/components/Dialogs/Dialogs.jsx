import React from "react";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let newMessage = React.createRef();
  let messagesPage = props.messagesPage;

  let onChangeHandler = () => {
    let text = newMessage.current.value;
    props.addMessage(text)
  } 

  let dialogsElements = messagesPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
     ));
  let messagesElements = messagesPage.messages.map((m) => (
    <Messages message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}
      <div>
        <textarea ref={newMessage}></textarea>
        <button onClick={onChangeHandler}>Add message</button>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
