import {addMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { RootStoreType } from "../../redux/redux-store";
import { Dispatch } from "redux";

let mapStateToProps = (state: RootStoreType) => {
    return {
        newPostText: state.messagesPage.newPostText,
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (text: string) => {
            dispatch(addMessageActionCreator(text));
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
