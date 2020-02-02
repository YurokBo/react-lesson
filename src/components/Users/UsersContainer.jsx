import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/UsersReducer";
import Users from "./Users";

//create UsersContainer component through function connect

const mapStateToProps = (state) => {
    //берем глобальный state из ReduxStore и вытаскиваем оттуда что нам нужен
    return {
        users: state.usersPage.users
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

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);