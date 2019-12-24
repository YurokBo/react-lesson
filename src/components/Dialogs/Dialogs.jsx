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

    let dialogs = props.state.dialogs
        .map(d => <DialogItem id={d.id} name={d.name}/>);

    let messages = props.state.messages
        .map(m => <Message id={m.id} message={m.messages}/>);

    let newMessageEl = React.createRef();

    let addMessage = () => {
        let text = newMessageEl.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>

            <div className={s.messages}>
                {messages}
            </div>

            <div>
                <textarea ref={newMessageEl} name="" id="" cols="15" rows="2"></textarea>
                <button onClick={ addMessage }>add message</button>
            </div>


            
        </div>
    )
}

export default Dialogs;