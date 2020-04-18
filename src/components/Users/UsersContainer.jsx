import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollow
} from "../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../../components/Common/Preloader/Preloader";
import {getUsers} from "../../api/api";

//вся контейнерная логика в одной контейнерной компоненте
class UsersContainer extends React.Component {

    componentDidMount() {
        //запрос идет - показывается прелоадер
        this.props.setToggleIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            //запрос пришел - прелоадер скрылся
            this.props.setToggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleIsFetching(true);
        //делаем аякс запрос на сервер при клике переключения страницы
        //чтобы получить еще пользователей для новой текущей страницы
        getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
            });
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
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching,
    toggleFollowingProgress,
    }) (UsersContainer);