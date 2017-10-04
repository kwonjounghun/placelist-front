import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div>
                <div className="card-content">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">E-Mail</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="nickname" type="text" className="validate" />
                            <label htmlFor="nickname">nickname</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="RePassword" type="password" className="validate" />
                            <label htmlFor="RePassword">password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button type="button" className="btn col s12">회원가입</button>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="card-content">
                        <div className="right">
                             <Link to="/auth/login">Let's go LOGIN</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;