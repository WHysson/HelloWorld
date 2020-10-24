const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialogsItems: [{
    id: 1,
    name: "Oleg Sadykov"
  }, {
    id: 2,
    name: "Alexandra Sadykova"
  }, {
    id: 3,
    name: "Vladislav Stoma"
  }, {
    id: 4,
    name: "Vladislava Leontieva"
  }, {
    id: 5,
    name: "Kirill Demchenko"
  }],
  messagesItems: [{
    id: 1,
    messageText: "Hello world"
  }, {
    id: 2,
    messageText: "How are you?"
  }, {
    id: 3,
    messageText: "What time is it now?"
  }, {
    id: 4,
    messageText: "Great game, thanks!"
  }, {
    id: 5,
    messageText: "I love you!!!"
  }],
  newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                messageText: state.newMessageText
            }
            state.messagesItems.push(newMessage)
            state.newMessageText = ""
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state

        default: return state
    }

}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer