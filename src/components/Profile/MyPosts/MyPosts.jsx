import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    const postData = [
        {id: 1, messages: 'Hi, how are you?', likesCount: 20},
        {id: 2, messages: 'It is my first post!', likesCount: 30}
    ]

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
                    <Post message={postData[0].messages} likeCount={postData[0].likesCount} />
                    <Post message={postData[1].messages} likeCount={postData[1].likesCount} />
                </div>
            </div>

        </div>
    )
}

export default MyPosts;