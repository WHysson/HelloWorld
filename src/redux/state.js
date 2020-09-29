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
  getState() {
    return this._state
  },
  _callSubscriber () {
    console.log(this._state)
  },
  addPost() {
    let newPost = { 
      id: 5,
      postText: this._state.profilePage.newPostText,
      likesCount: "0"
    }
    
    this._state.profilePage.postsItems.push(newPost)
    this._state.profilePage.newPostText = ""
    this._callSubscriber(this._state)
    
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
    
  },
  sendMessage() {

    let newMessage = {
      id: 6,
      messageText: this._state.messagesPage.newMessageText
    }
    this._state.messagesPage.messagesItems.push(newMessage)
    this._state.messagesPage.newMessageText = ""
    this._callSubscriber(this._state)
  },
  updateNewMessageText(newText) {
    this._state.messagesPage.newMessageText = newText
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}


export default store