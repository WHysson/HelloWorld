import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import style from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {
  
  let postsElements = props.state.profilePage.postsItems.map(post => <Post postText={post.postText} likesCount={post.likesCount} />)

  let postMessage = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = postMessage.current.value
    let action = updateNewPostTextActionCreator(text) 
    props.dispatch(action)

  }
  return (
    <div className={style.content}>
      <div className={style.addPost}>
        <h2>My Posts</h2>
        <input onChange={onPostChange} value={props.state.profilePage.newPostText} id="addPost__textarea" ref={postMessage} className={style.addPost__input} type="text" placeholder="Write something" name="uname" />
        <button onClick={addPost} className={style.addPost__button}>Add post</button>
      </div>


      {postsElements}


    </div>
  );

}

export default MyPosts;
