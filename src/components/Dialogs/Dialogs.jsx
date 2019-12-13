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
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Ivan' id='2'/>
                <DialogItem name='Ioan' id='3'/>
                <DialogItem name='Ilia' id='4'/>
                <DialogItem name='Olia' id='5'/>
            </div>

            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hey'/>
                <Message message='Hello'/>
                <Message message='Hullo'/>
                <Message message='Ho'/>
            </div>
        </div>
    )
}

export default Dialogs;