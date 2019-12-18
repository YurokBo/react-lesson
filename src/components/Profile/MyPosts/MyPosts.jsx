import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElems = props.posts.map(p => <Post message={p.messages} likeCount={p.likesCount}/>)
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