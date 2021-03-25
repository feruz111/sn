let ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Sveta" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "how is your it-kamasutra" },
    { id: 3, message: "yo" },
    { id: 4, message: "yo" },
    { id: 5, message: "yo" },
  ],
};

export const dialogReducer = (state = initialState,action) => {

    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 6, message: action.text
            };
    
            state.messages.push(newMessage);
              return state;
        default:
              return state;


    }

};

export const addMessageActionCreator = (text) => {
    return {
      type: ADD_MESSAGE, text
    }
  };