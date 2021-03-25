import React from "react";
import Messages from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { addMessageActionCreator } from "../../redux/dialogsReducer";


const Dialogs = (props) => {

  let newMessage = React.createRef();

  let onChangeHandler = () => {
    let text = newMessage.current.value;
    props.dispatch(addMessageActionCreator(text))
    

  } 

  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
     ));
  let messagesElements = props.messages.map((m) => (
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
