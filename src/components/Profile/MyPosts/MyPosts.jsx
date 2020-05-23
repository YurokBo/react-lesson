import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControl/FormsControl";


const MyPosts = (props) => {
    //
    let postsElems = props.posts.map(p => <Post message={p.messages} likeCount={p.likesCount} />);

    let onAddPost = (values) => {
        props.onAddPost(values.newPostText);
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
const maxLength10 = maxLengthCreator(10);
const AddPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" placeholder="Enter your message"
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: "ProfileAddPostForm"})(AddPostForm);

export default MyPosts;