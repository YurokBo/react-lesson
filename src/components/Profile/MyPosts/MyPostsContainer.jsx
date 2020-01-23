import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        //оборачиваем MyPost, чтобы перзентационная компонента имела доступ к контексту store
        <StoreContext.Consumer>{
            (store) => {
                let state = props.store.getState();
                let onAddPost = () => {
                    props.store.dispatch(addPostActionCreator())
                };

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    props.store.dispatch(action)
                };
                return <MyPosts updateNewPostText={onPostChange} onAddPost={onAddPost}
                    //передаем посты через props из контейнерной компоненты в презентационную
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
        }</StoreContext.Consumer>

    );
};

export default MyPostsContainer;