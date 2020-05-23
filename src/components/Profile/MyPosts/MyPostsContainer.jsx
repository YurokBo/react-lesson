import React from 'react';
import {addPostActionCreator} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
                onAddPost: (addPost) => {
            dispatch(addPostActionCreator(addPost))
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;