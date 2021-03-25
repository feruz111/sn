import React from "react";
import { addMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let messagesPage = store.getState().messagesPage;

        let onAddMessageHandler = (text) => {
          store.dispatch(addMessageActionCreator(text));
        };
        return (
          <Dialogs
            addMessage={onAddMessageHandler}
            messagesPage={messagesPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
