import React from 'react';
import styles from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/imgages/user.png'

//create User class component
class Users extends React.Component {

    componentDidMount() {
        //get запрос на сервер за пользователями
        //в параметрах после ? через пропсы указываем текущую страницу и размер страницы
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });


    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        //делаем аякс запрос на сервер при клике переключения страницы
        //чтобы получить еще пользователей для новой текущей страницы
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };


    render() {
        //подсчитаваем количество страниц и округляем до целого в большую сторону, иначе не отрисует не полную страницу
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                            <span className={this.props.currentPage === p ?
                                styles.selectedPage :
                                '' +
                                styles.pages} onClick={(e) => {
                                this.onPageChanged(p)
                            }}>{p}</span>
                        )
                    })}

                </div>

                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ?
                                u.photos.small :
                                userPhoto} className={styles.userPhoto}
                                 alt=""/>
                        </div>
                        <div>
                            {u.followed ?
                                <button className={styles.btn} onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button className={styles.btn} onClick={() => {
                                    this.props.follow(u.id)
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
    }
}

export default Users;