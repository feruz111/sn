export type AddMessageActionType = {
  type: "ADD-MESSAGE";
  text: string;
};

export type DialogsType = {
  id: number;
  name: string;
};
export type MessagesType = {
  id: number;
  message: string;
};

export type DialogsReducerActionsType = AddMessageActionType;

export type MessagesPageType = {
  dialogs: Array<DialogsType>;
  messages: Array<MessagesType>;
  newPostText: string;
};

let initialState: MessagesPageType = {
  dialogs: [
    { id: 1, name: "John" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Black" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Helena" },
    { id: 6, name: "Shack" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "how are u doin" },
    { id: 3, message: "yo" },
    { id: 4, message: "yo" },
  ],
  newPostText: "",
};

export const dialogReducer = (
  state = initialState,
  action: DialogsReducerActionsType
): MessagesPageType => {
  switch (action.type) {
    case "ADD-MESSAGE":
      return {
        ...state,
        newPostText: "",
        messages: [
          ...state.messages,
          {
            id: 6,
            message: action.text,
          },
        ],
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = (text: string): AddMessageActionType => {
  return {
    type: "ADD-MESSAGE",
    text,
  };
};
