import React from 'react';
import s from './Dialogs.module.css';
import {NavLink, Redirect} from "react-router-dom";
import {sendMessageCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const DialogItem = (props) => {

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

let newMessageEl = React.createRef();

//создаем ф-ции, которые возвращают объекты
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);