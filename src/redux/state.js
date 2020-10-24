import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  
  _callSubscriber() {
    console.log(this._state);
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  }

};
export default store;