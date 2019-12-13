import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFocVdrh7XQ-XWjzCDgkUvEflBfBts5IxFoH2JhpjsAFj-O_PC&s"
                    alt=""/>
            </div>

            <div className={s.discriptionBlock}>
                ava + discrip
            </div>


        </div>
    )
}

export default ProfileInfo;