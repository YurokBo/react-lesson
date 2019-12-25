import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElems = props.posts
        .map(p => <Post message={p.messages} likeCount={p.likesCount}/>)

    let newPostEl = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>

            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElems}
                </div>
            </div>

        </div>
    )
}

export default MyPosts;