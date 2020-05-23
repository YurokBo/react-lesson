import React from 'react';
import s from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../Common/FormsControl/FormsControl";

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

    let state = props.dialogsPage;

    let dialogs = state.dialogs.map(d => <DialogItem key={d.id} d={d.id} name={d.name}/>);
    let messages = state.messages.map(m => <Message key={m.id} message={m.messages}/>);

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
    };

    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>

            <div className={s.messages}>
                <div>{messages}</div>
                <AddMassageFormRedux onSubmit={addNewMessage} />
            </div>

        </div>
    )
};
const maxLength100 = maxLengthCreator(100);
const AddMassageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody' placeholder='Enter your message'
                       validate={[required, maxLength100]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

const AddMassageFormRedux = reduxForm({form: "dialogAddMassageForm"})(AddMassageForm);

export default Dialogs;