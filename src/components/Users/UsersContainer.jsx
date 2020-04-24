import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    getUsers
} from "../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../../components/Common/Preloader/Preloader";

//вся контейнерная логика в одной контейнерной компоненте
class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);

    };

    render() {

        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}/>
            </>
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};


//рефакторим код. вместо ф-ции mapDispatchToProps, возвращающей объект, вставляем сам объект
//тем самым сокращаем количество кода
export default connect(mapStateToProps, {
    //action from UsersReducer
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    }) (UsersContainer);