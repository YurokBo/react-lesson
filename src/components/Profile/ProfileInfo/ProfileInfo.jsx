import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>

           {/* <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFocVdrh7XQ-XWjzCDgkUvEflBfBts5IxFoH2JhpjsAFj-O_PC&s"
                    alt=""/>
            </div>*/}

            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                <div>{props.profile.aboutMe}</div>

            </div>


        </div>
    )
};

export default ProfileInfo;