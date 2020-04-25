import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/ProfileReducer";
import {Redirect, withRouter} from "react-router-dom";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2
        }

        this.props.getUserProfile(userId);

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


//HOC
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) =>( {
    profile: state.profilePage.profile,
});

export default
compose(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect,
    withRouter
)(ProfileContainer);