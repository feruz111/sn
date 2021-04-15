import { addMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs, { DialogsPageType } from "./Dialogs";
import { connect } from "react-redux";
import { RootStoreType } from "../../redux/redux-store";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: RootStoreType) => {
  return {
    newPostText: state.messagesPage.newPostText,
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addMessage: (text: string) => {
      dispatch(addMessageActionCreator(text));
    },
  };
};

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
