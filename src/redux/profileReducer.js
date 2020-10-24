const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState =  {
    postsItems: [{
      id: 1,
      postText: "My first message",
      likesCount: "26"
    }, {
      id: 2,
      postText: "My second message",
      likesCount: "52"
    }, {
      id: 3,
      postText: "Another message",
      likesCount: "10"
    }, {
      id: 4,
      postText: "Another one message",
      likesCount: "15"
    }],
    friendsItems: [{
      id: 1,
      name: "Oleg Sadykov",
      avatar: "Oleg_Sadykov_avatar.jpg"
    }, {
      id: 2,
      name: "Ekaterina Bartfeld",
      avatar: "Ekaterina_Bartfeld_avatar.jpg"
    }, {
      id: 3,
      name: "Vladislav Stoma",
      avatar: "Vladislav_Stoma_avatar.jpg"
    }, {
      id: 4,
      name: "Vladislava Leontieva",
      avatar: "Vladislava_leontieva_avatar.jpg"
    }, {
      id: 5,
      name: "Kirill Demchenko",
      avatar: "Kirill_Demchenko_avatar.jpg"
    }, {
      id: 6,
      name: "Andrey Kochenov",
      avatar: "Andrey_Kochenov_avatar.jpg"
    }],
    newPostText: ""
  }


const profileReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                postText: state.newPostText,
                likesCount: "0"
            }
            state.postsItems.push(newPost)
            state.newPostText = ""
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state

        default: return state
    }

}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer