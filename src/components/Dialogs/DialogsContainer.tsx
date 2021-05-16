import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs, { DialogsPageType } from "./Dialogs";
import { connect } from "react-redux";
import { AppActionsType, RootStoreType } from "../../redux/store";
import { compose, Dispatch } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: RootStoreType) => {
  return {
    newPostText: state.messagesPage.newPostText,
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch<AppActionsType>) => {
  return {
    addMessage: (text: string) => {
      dispatch(addMessageActionCreator(text));
    },
  };
};

export const DialogsContainer:any = compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);
