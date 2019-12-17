import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    const posts = [
        {id: 1, messages: 'Hi, how are you?', likesCount: 20},
        {id: 2, messages: 'It is my first post!', likesCount: 30},
        {id: 2, messages: 'It is my first post!', likesCount: 30},
        {id: 2, messages: 'It is my first post!', likesCount: 30},
    ]

    let postsElems = posts.map(p => <Post message={p.messages} likeCount={p.likesCount}/>)

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
                    {postsElems}
                </div>
            </div>

        </div>
    )
}

export default MyPosts;