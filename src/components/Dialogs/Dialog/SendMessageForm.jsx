import React from 'react'
import style from './../Dialogs.module.css'


function SendMessageForm(props) {

    let textMessage = React.createRef();

    let sendMessage = () => {
        alert(textMessage.current.value)
        textMessage.current.value = ""
    }

    return (
        <div className={style.dialog}>
            <input id="SendMessageForm__input" ref={textMessage} className={style.SendMessageForm__input} type="text" placeholder="Write message" name="uname" />
            <button id="SendMessageForm__button" onClick={sendMessage} className={style.SendMessageForm__button}>Send message</button>
        </div>
    )
}



export default SendMessageForm