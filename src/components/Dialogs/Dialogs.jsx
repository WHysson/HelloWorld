import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './Dialog/DialogItem'
import MessageItem from './Message/MessageItem'
import SendMessageForm from './Dialog/SendMessageForm'

function Dialogs(props) {
    
    let dialogsElements = props.state.messagesPage.dialogsItems.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

   
    let messageElements = props.state.messagesPage.messagesItems.map(message => <MessageItem message={message.messageText} />)
    return (
        <div className="app-wrapper__content">
            <div className={style.dialogs}>
                <div className={style.dialogItems}>

                    {dialogsElements}

                </div>

                <div className={style.messages}>
                    {messageElements}

                    <SendMessageForm state = {props.state} dispatch = {props.dispatch}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs