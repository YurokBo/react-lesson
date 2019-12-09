import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
        return <div className={s.content}>
            <div>
                <textarea name="" id="" cols="20" rows="1"></textarea>
                <button>Add post</button>
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?'/>
                    <Post message='It is my first post!'/>
                </div>
            </div>

        </div>
}

export default MyPosts;