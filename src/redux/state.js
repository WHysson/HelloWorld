let store = {
  _state: {
    messagesPage: {

      dialogsItems: [
        { id: 1, name: "Oleg Sadykov" },
        { id: 2, name: "Alexandra Sadykova" },
        { id: 3, name: "Vladislav Stoma" },
        { id: 4, name: "Vladislava Leontieva" },
        { id: 5, name: "Kirill Demchenko" },
      ],
      messagesItems: [
        { id: 1, messageText: "Hello world" },
        { id: 2, messageText: "How are you?" },
        { id: 3, messageText: "What time is it now?" },
        { id: 4, messageText: "Great game, thanks!" },
        { id: 5, messageText: "I love you!!!" }
      ],
      newMessageText: ""

    },
    profilePage: {

      postsItems: [
        { id: 1, postText: "My first message", likesCount: "26" },
        { id: 2, postText: "My second message", likesCount: "52" },
        { id: 3, postText: "Another message", likesCount: "10" },
        { id: 4, postText: "Another one message", likesCount: "15" },

      ],

      friendsItems: [
        { id: 1, name: "Oleg Sadykov", avatar: "Oleg_Sadykov_avatar.jpg" },
        { id: 2, name: "Ekaterina Bartfeld", avatar: "Ekaterina_Bartfeld_avatar.jpg" },
        { id: 3, name: "Vladislav Stoma", avatar: "Vladislav_Stoma_avatar.jpg" },
        { id: 4, name: "Vladislava Leontieva", avatar: "Vladislava_leontieva_avatar.jpg" },
        { id: 5, name: "Kirill Demchenko", avatar: "Kirill_Demchenko_avatar.jpg" },
        { id: 6, name: "Andrey Kochenov", avatar: "Andrey_Kochenov_avatar.jpg" },
      ],

      newPostText: ""

    }
  },
  _callSubscriber() {
    console.log(this._state)
  },


  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },


  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        postText: this._state.profilePage.newPostText,
        likesCount: "0"
      }

      this._state.profilePage.postsItems.push(newPost)
      this._state.profilePage.newPostText = ""
      this._callSubscriber(this._state)

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)

    } else if (action.type === 'SEND-MESSAGE') {
      let newMessage = {
        id: 6,
        messageText: this._state.messagesPage.newMessageText
      }
      this._state.messagesPage.messagesItems.push(newMessage)
      this._state.messagesPage.newMessageText = ""
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.messagesPage.newMessageText = action.newText
      this._callSubscriber(this._state)
    }
  }

}
export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
  }
}


export default store