import React from 'react';
import style from './../MyFriends.module.css'


function Friend(props) {


  return (
    <div className={style.itemList}>
      {/* <img src={require("./../../../../images/avatars/" + props.avatar)} alt=""/> */}
      <h3>{props.id}</h3>
      <p>{props.name}</p>
    </div>
  );
}

export default Friend;
