import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/UsersReducer";
import Users from "./Users";


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

export default connect(mapStateToProps, mapDispatchToProps)(Users);