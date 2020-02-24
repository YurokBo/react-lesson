import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/UsersReducer";
import * as axios from "axios";
import Users from "./Users";

//вся контейнерная логика в одной контейнерной компоненте
class UsersContainer extends React.Component {

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

        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        )

    }
}
//create UsersContainer component through function connect

const mapStateToProps = (state) => {
    //берем глобальный state из ReduxStore и вытаскиваем оттуда что нам нужен
    return {
        users: state.usersPage.users,
        //прокидывем размер страницы, общее количество пользователей и текущую страницу через props
        //в контейнерную компоненту
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    //return callback functions
    return {
        //action from UsersReducer
        follow: (userId) => {
            //dispatch action
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            //dispatch action
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            //dispatch action
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);