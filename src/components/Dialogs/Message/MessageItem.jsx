import React from 'react'
import style from './../Dialogs.module.css'

function MessageItem(props) {

    return (
        <div className={style.message}>
            <p>{props.message}</p>
        </div>
    )
}



export default MessageItem