import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    //
    let postsElems = props.posts.map(p => <Post message={p.messages} likeCount={p.likesCount} />);

    let newPostEl = React.createRef();

    let onAddPost = (values) => {
        props.onAddPost(values.addPost);
    };

    return (
        <div className={s.postsBlock}>

            <h3>My Posts</h3>
            <div>
                <AddPostFormRedux onSubmit={onAddPost}/>

                <div className={s.posts}>
                    {postsElems}
                </div>
            </div>

        </div>
    )
};

const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="addPost" placeholder="Enter your message"/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: "ProfileAddPostForm"})(AddPostForm);

export default MyPosts;