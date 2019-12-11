import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Ioan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Ilia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Olia</NavLink>
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hey</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Hullo</div>
                <div className={s.message}>Ho</div>
            </div>
        </div>
    )
}

export default Dialogs;