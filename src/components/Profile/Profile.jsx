import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
        return <div className={s.content}>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFocVdrh7XQ-XWjzCDgkUvEflBfBts5IxFoH2JhpjsAFj-O_PC&s" alt=""/>
                </div>

                <div>
                    ava + discrip
                </div>

            <MyPosts />

        </div>
}

export default Profile;