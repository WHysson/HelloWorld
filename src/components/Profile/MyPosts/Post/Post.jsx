import React from 'react';
import style from './Post.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Post(props) {


  return (
    <div className={style.content}>
    
     <img src={require("./../../../../images/avatar.jpg")} alt=""/>
      {/* <span className={style.content__message}>{props.postText}</span> */}
      <div className={style.content_message}>{props.postText}</div>
      <span className={style.content__span}> <FontAwesomeIcon icon="heart" />  {parseInt(props.likesCount) + 10}</span>
    </div>
  );
}

export default Post;
