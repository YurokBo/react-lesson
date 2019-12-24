import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = () => {
    return (
        <div>
            <div className={s.friendsWrapper}>
                <NavLink to='/friends' className="friendsName">
                    <img src="https://sun1-21.userapi.com/c840437/v840437072/27ed3/lvsdptFQsbg.jpg?ava=1" alt=""/>
                    <p>Andrew</p>
                </NavLink>
                <NavLink to='/friends' className="friendsName">
                    <img src="https://sun9-53.userapi.com/c855216/v855216791/c506c/_J7NVmp6OSU.jpg" alt=""/>
                    <p>Olia</p>
                </NavLink>
                <NavLink to='/friends' className="friendsName">
                    <img src="https://sun9-45.userapi.com/c849424/v849424990/a1f7c/3TM7LVllUxI.jpg?ava=1" alt=""/>
                    <p>Evgenia</p>
                </NavLink>
            </div>
        </div>

    )


}

export default Friends;