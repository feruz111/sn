import { ComponentType } from "react";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {
  addMessageActionCreator,
  MessagesPageType
} from "../../redux/dialogs-reducer";
import { AppActionsType, RootStoreType } from "../../redux/store";
import Dialogs from "./Dialogs";

type mstpType = {
  newPostText: string;
  messagesPage: MessagesPageType;
};
type mdtpType = {
  addMessage: (text: string) => void;
};

let mapStateToProps = (state: RootStoreType): mstpType => {
  return {
    newPostText: state.messagesPage.newPostText,
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch<AppActionsType>): mdtpType => {
  return {
    addMessage: (text: string) => {
      dispatch(addMessageActionCreator(text));
    },
  };
};

export const DialogsContainer = compose<ComponentType>(
  withAuthRedirect,
  connect<mstpType, mdtpType, {}, RootStoreType>(
    mapStateToProps,
    mapDispatchToProps
  )
)(Dialogs);
