import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

        return (

                    <div className={s.item}>
                        <img src="https://sun1-24.userapi.com/c857320/v857320383/72cc9/Q2ZxjjbphDM.jpg?ava=1" alt=""/>
                        {props.message} {props.name}
                        <div>
                            <span>like</span>{' ' + props.likeCount}
                        </div>

                    </div>


        )
}

export default Post;