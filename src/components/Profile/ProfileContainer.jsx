import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                //запрос пришел - прелоадер скрылся
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) =>( {
    profile: state.profilePage.profile
});

//создаем функцию и передаем туда контейнерную компоненту, чтобы закинуть в нее
//данные из URL, получить новую компоненту и передать ее connect
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);