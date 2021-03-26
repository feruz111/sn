import { addMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.newPostText,
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (text) => {
      dispatch(addMessageActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
