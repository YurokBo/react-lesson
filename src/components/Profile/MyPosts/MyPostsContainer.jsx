import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        //оборачиваем MyPost, чтобы перзентационная компонента имела доступ к контексту store
        //функция, которая принимает store и возвращает компоненту
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                let onAddPost = () => {
                    //убираем пропсы и обращаемся к стору напрямую
                    store.dispatch(addPostActionCreator())
                };

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    //убираем пропсы и обращаемся к стору напрямую
                    store.dispatch(action)
                };
                return (
                    <MyPosts updateNewPostText={onPostChange} onAddPost={onAddPost}
                        //передаем посты через props из контейнерной компоненты в презентационную
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>
                )
            }
            }
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;