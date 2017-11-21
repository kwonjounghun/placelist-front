import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const textCenter = {
        textAlign: "center",
        display: 'block'
    };
    return (
        <div>
            <form>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="userName" id="userName" type="text" className="validate" />
                        <label htmlFor="userName">userName</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="userEmail" id="userEmail" type="text" className="validate" />
                        <label htmlFor="userEmail">userEmail</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="password" id="password" type="password" className="validate" />
                        <label htmlFor="password">password</label>
                    </div>
                </div>
                <div className="row">
                    <button type="submit" className="waves-effect waves-light btn col s12">회원가입</button>

                </div>
            </form>
            <div className="row">
                <Link style={textCenter} to="/signin">로그인하러 가기</Link>
            </div>
        </div>
    );
};


export default SignUp;