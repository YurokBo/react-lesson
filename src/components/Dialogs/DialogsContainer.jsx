import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";

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

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let newMessageEl = React.createRef();

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                 dialogsPage={state}/>
    )
};

export default DialogsContainer;