import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import MyFriends from './MyFriends/MyFriends';

function Profile(props) {
  
  return (
    <div className={style.content}>
      <div className={style.avatar}>
        <img src={require("./../../images/avatar.jpg")} alt="" />
        <MyFriends state={props.state} />
      </div>

      <div className={style.description}>
        <div className={style.item1}>
          <h3>Alexandra Sadykova</h3>
          <p>change status</p>

        </div>
        <hr align="left" />
        <div className={style.item2}>
          <p>City: London is the capital of Great Britain</p>
          <p>Family status: Single</p>
        </div>
      </div>
      <MyPosts dispatch = {props.dispatch} state={props.state} />

    </div>
  );
}

export default Profile;
