import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from 'actions/Authentication';
import {withRouter} from 'react-router-dom';

import SignIn from 'components/organisms/SignIn';
import SignUp from 'components/organisms/SignUp';

const Materialize = window.Materialize;
const $ = window.$;

class RegisterFromContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            password: ""
        }
        this.SignInFormHandle = this.SignInFormHandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    SignInFormHandle(e) {
        e.preventDefault();
        this.props.loginRequest(this.state.userEmail, this.state.password).then(
            () => {
                if (this.props.status === "SUCCESS") {
                    // create session data
                    let userInfo = this.props.userInfo;

                    document.cookie = 'userInfo=' + btoa(JSON.stringify(userInfo));
                    // window.sessionStorage.setItem('userInfo', btoa(JSON.stringify(userInfo)));


                    Materialize.toast('Welcome, ' + this.state.userEmail + '!', 2000);
                    let location = "/";
                    this.props.history.push(location);
                } else {
                    let $toastContent = $('<span style="color: #FFB4BA">Incorrect username or password</span>');
                    Materialize.toast($toastContent, 2000);
                    this.setState({
                        password: ''
                    });
                }
            }
        );;
    };
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    };

    render() {
        return (
            <div>
                {
                    this.props.isSignUpPage ?
                        <SignUp /> :
                        <SignIn
                            SignInFormHandle={this.SignInFormHandle}
                            handleChange={this.handleChange}
                            SignInState={this.state}
                        />
                }
                <div className="row">
                    <button className="waves-effect waves-light btn col s12">페이스북으로 로그인</button>
                </div>
            </div>
        );
    };
};
const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status,
        userInfo : state.authentication.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id, pw));
        }
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterFromContainer));