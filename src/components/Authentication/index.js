import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthRouter from '../../routes/Authentication';

class Authentication extends Component {
    constructor(props, match){
        super(props);
        this.state = { pagename : true } ;
    }

    componentDidMount() {
        // component가 만들어지고 첫 렌더링이 완료되었을때 실행할 코드
        this.changePage(this.props.location.pathname);
    }
    componentWillReceiveProps(nextProps){
        this.changePage(nextProps.location.pathname);
    }
    changePage(pagepath) {
        let pageName = pagepath.toLowerCase();
        if(pageName === '/auth/login'){
            this.setState({ pagename : true });
        } else {
            this.setState({ pagename : false });
        }
    }
    render() {
        return (
            <div>
                <div className="container auth">
                    <Link className="logo" to="/">PLACELIST</Link>
                    <div className="card">
                        <div className="header blue white-text center">
                            <div className="card-content">{this.state.pagename ? "LOGIN" : "REGISTER"}</div>
                        </div>
                        <AuthRouter />
                    </div>
                </div>
            </div>
        )
    }
}

Authentication.propTypes = {
    mode: React.PropTypes.bool,
    onLogin: React.PropTypes.func,
    onRegister: React.PropTypes.func
};

Authentication.defaultProps = {
    mode: true,
    onLogin: (id, pw) => { console.error("login function not defined"); },
    onRegister: (id, pw) => { console.error("register function not defined"); }
};

export default Authentication;