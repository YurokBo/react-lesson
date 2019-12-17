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

    let dialogs = dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messages = messagesData.map(m => <Message id={m.id} message={m.messages}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>

            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;