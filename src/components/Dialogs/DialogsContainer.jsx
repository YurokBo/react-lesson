import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

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

let newMessageEl = React.createRef();

const DialogsContainer = () => {

    return (
        //the same in MyPostContainer
        <StoreContext.Consumer>
            {store => {

                let state = store.getState().dialogsPage;

                const onSendMessageClick = () => {
                    //убираем пропсы и обращаемся к стору напрямую
                    store.dispatch(sendMessageCreator())
                };

                const onNewMessageChange = (body) => {
                    //убираем пропсы и обращаемся к стору напрямую
                    store.dispatch(updateNewMessageBodyCreator(body))
                };
                return (
                    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                             dialogsPage={state}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;