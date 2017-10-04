import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { getStatusRequest } from '../../../actions/Authentication';


class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        console.log("props : ",props);
        const getCookie = (key) => {
            var value = "; " + document.cookie;
            var parts = value.split("; " + key + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        };

        let userInfo = getCookie('userInfo');

        console.log("userInfo : ", userInfo);
    }
    componentWillMount() {
        const getCookie = (key) => {
            var value = "; " + document.cookie;
            var parts = value.split("; " + key + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        };

        let userInfo = getCookie('userInfo');

        if (typeof userInfo === "undefined") return;

        userInfo = JSON.parse(atob(userInfo));

        if (!userInfo) return;

        this.props.getStatusRequest(userInfo.token).then(() => {
            console.log(this.props.status);
            if (!this.props.status.valid) {
                userInfo = "";
                document.cookie = 'userInfo=' + btoa(JSON.stringify(userInfo));
            }
        });
    }
    render() {
        const router = (
            <Route path={this.props.path} component={this.props.component} />
        );
        const redirect = (
            <Redirect to={{ pathname: '/auth/login' }} />
        );

        return (
            <div>
                {this.props.status.isLoggedIn === true ? router : redirect}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatusRequest: (token) => {
            return dispatch(getStatusRequest(token));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));