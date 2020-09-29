import React from 'react'
import style from './../Dialogs.module.css'


function SendMessageForm(props) {

    let textMessage = React.createRef();

    let sendMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = () => {
        props.updateNewMessageText(textMessage.current.value)
        console.log(props.state.messagesPage.newMessageText)
    }

    return (
        <div className={style.dialog}>
            <input onChange={onMessageChange} id="SendMessageForm__input" value = {props.state.messagesPage.newMessageText} ref={textMessage} className={style.SendMessageForm__input} type="text" placeholder="Write message" name="uname" />
            <button id="SendMessageForm__button" onClick={sendMessage} className={style.SendMessageForm__button}>Send message</button>
        </div>
    )
}



export default SendMessageForm