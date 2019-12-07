import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
        return <div className={s.content}>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFocVdrh7XQ-XWjzCDgkUvEflBfBts5IxFoH2JhpjsAFj-O_PC&s" alt=""/>
            </div>

            <div>
                ava + discrip
            </div>

            <div>
                my posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>

        </div>
}

export default Profile;