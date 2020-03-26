import React from 'react';
import styles from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/imgages/user.png'
import {NavLink} from "react-router-dom";

//create User class component
const Users = props => {


    //подсчитаваем количество страниц и округляем до целого в большую сторону, иначе не отрисует не полную страницу
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    //создаем пустой массив страниц и заполняем его через цикл количеством страниц методом push()
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>

            <div>
                {/*методом map() пробегаем по массиву и возвращаем span и номер страницы*/}
                {pages.map(p => {
                    return (
                        //if currentPage === p true than page selected
                        <span className={props.currentPage === p ?
                            styles.selectedPage :
                            '' +
                            styles.pages} onClick={(e) => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                    )
                })}

            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ?
                                    u.photos.small :
                                    userPhoto} className={styles.userPhoto}
                                     alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button className={styles.btn} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button className={styles.btn} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )

};

export default Users;