import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginRequest } from 'actions/Authentication';
import { connect } from 'react-redux';
const Materialize = window.Materialize;
const $ = window.$;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleLogin() {
        let id = this.state.userEmail;
        let pw = this.state.password;
        return this.props.loginRequest(id, pw).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    // create session data
                    let userInfo = this.props.userInfo;

                    document.cookie = 'userInfo=' + btoa(JSON.stringify(userInfo));
                    // window.sessionStorage.setItem('userInfo', btoa(JSON.stringify(userInfo)));
                    

                    Materialize.toast('Welcome, ' + id + '!', 2000);
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
        );
        
    }
    
    
    render() {
        return (
            <div>
                <div className="card-content">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="1" type="email" name="userEmail" className="validate" onChange={this.handleChange} value={this.state.userEmail}/>
                            <label htmlFor="1">E-Mail</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="2" type="password" name="password" className="validate" onChange={this.handleChange} value={this.state.password} />
                            <label htmlFor="2">password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button type="button" className="btn col s12" onClick={this.handleLogin}>로그인</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button type="button" className="btn col s12">facebook Login</button>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="card-content">
                        <div className="right" >
                            New Here? <Link to="/auth/register">Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status,
        userInfo : state.authentication.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => { 
            return dispatch(loginRequest(id,pw)); 
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
