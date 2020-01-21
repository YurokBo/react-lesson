import React from 'react';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch( addPostActionCreator() )
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text) ;
        props.store.dispatch( action )
    };

    return (
        <div >
           <MyPosts updateNewPostText={ onPostChange } addPost={ onAddPost }
                    posts={state.profilePage.posts}
                    newpPostText={ state.profilePage.newPostText } />
        </div>
    )
};

export default MyPostsContainer;