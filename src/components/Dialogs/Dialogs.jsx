import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    const dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Ioan'},
        {id: 4, name: 'Ilia'},
        {id: 5, name: 'Olia'}
    ]

    const messagesData = [
        {id: 1, messages: 'Hi'},
        {id: 2, messages: 'Hey'},
        {id: 3, messages: 'Hello'},
        {id: 4, messages: 'Hullo'},
        {id: 5, messages: 'Ho'}
    ]

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
            </div>

            <div className={s.messages}>
                <Message id={messagesData[0].id} message={messagesData[0].messages} />
                <Message id={messagesData[1].id} message={messagesData[1].messages} />
                <Message id={messagesData[2].id} message={messagesData[2].messages} />
                <Message id={messagesData[3].id} message={messagesData[3].messages} />
                <Message id={messagesData[4].id} message={messagesData[4].messages} />
            </div>
        </div>
    )
}

export default Dialogs;