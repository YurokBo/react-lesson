import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

        return (

                    <div className={s.item}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz53sp_NDyDgocvpd3WIOzN1YRF3u2xly-4uxamK3iU04PpLuPpw&s" alt=""/>
                        {props.message}
                        <div>
                            <span>like</span>
                        </div>

                    </div>


        )
}

export default Post;