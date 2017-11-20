import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userEmail: "",
            password: ""
        }
        this.LoginFormHandle = this.LoginFormHandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    LoginFormHandle (e) {
        e.preventDefault();
        this.props.loginRequest(this.state.userEmail, this.state.password);
    };
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    };
    render() {
        const textCenter = {
            textAlign: "center",
            display: 'block'
        };
        return (
            <div>
                <form onSubmit={this.LoginFormHandle}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="userEmail" id="userEmail" name="userEmail" type="text" className="validate" value={this.state.userEmail} onChange={this.handleChange}/>
                            <label htmlFor="userEmail">userEmail</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="password" id="password" name="password" type="password" className="validate" value={this.state.password} onChange={this.handleChange}/>
                            <label htmlFor="password">password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn col s12">로그인</button>
                    </div>
                </form>
                <div className="row">
                    <Link style={textCenter} to="/signup">회원가입하러 가기</Link>
                </div>
            </div>
        );
    };
};
export default SignIn;