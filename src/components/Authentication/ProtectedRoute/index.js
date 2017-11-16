import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { getStatusRequest, getStatusValueFunc } from 'actions/Authentication';

class PrivateRoute extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { loggedIn : false };
    }
    componentWillMount() {
        const setStatefunc = (boolen) => {
            this.setState({loggedIn : boolen});
        }
        const getCookie = (key) => {
            var value = "; " + document.cookie;
            var parts = value.split("; " + key + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        };

        let userInfo = getCookie('userInfo');
        // let userInfo = JSON.parse(atob(window.sessionStorage.getItem('userInfo')));
        if (typeof userInfo === "undefined") {
            setStatefunc(false);
            return;
        }

        userInfo = JSON.parse(atob(userInfo));

        if (!userInfo.token) {
            if(this.props.status.isLoggedIn){
                setStatefunc(true);
            }
            return;
        };
        
        let loggedState = this.props.getStatusRequest(userInfo.token).then((data) => {
            if(typeof data === 'Object'){
                if (data.type !== "AUTH_GET_STATUS_SUCCESS") {
                    userInfo = "";
                    // window.sessionStorage.setItem('userInfo', btoa(JSON.stringify(userInfo)));
                    document.cookie = 'userInfo=' + btoa(JSON.stringify(userInfo));
                } else {
                    return true
                }
            }
        });
        if(loggedState){
            setStatefunc(true);
        }
        
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
                {this.state.loggedIn === true ? router : redirect}
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
        },
        getStatusValueFunc: () => {
            return dispatch(getStatusValueFunc());
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));