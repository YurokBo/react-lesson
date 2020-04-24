import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            {/*use container component*/}
            <MyPostsContainer /*store={props.store}*/  />

        </div>
    )
};

export default Profile;