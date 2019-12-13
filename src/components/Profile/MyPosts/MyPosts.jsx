import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="20" rows="1" value=''/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?' likeCount='20'/>
                    <Post message='It is my first post!' likeCount='30'/>
                </div>
            </div>

        </div>
    )
}

export default MyPosts;