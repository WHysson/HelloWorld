import React from 'react';
import style from './MyFriends.module.css'
import Friend from './Friend/Friend';


function MyFriends(props) {

    let friendsElements = props.state.profilePage.friendsItems.map(friend => <Friend id={friend.id} name={friend.name} />)

    return (
        <div className={style.content}>
            <h2 className={style.content__heading}>My Friends</h2>
            <hr/>
            <div className={style.content__items}>
                {friendsElements}
            </div>

        </div>
    );
}

export default MyFriends;
