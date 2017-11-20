import React from 'react';
import {connect} from 'react-redux';
import {loginRequest} from 'actions/Authentication';

import SignIn from 'components/organisms/SignIn';
import SignUp from 'components/organisms/SignUp';

class RegisterFromContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.isSignUpPage ? <SignUp /> : <SignIn loginRequest={this.props.loginRequest}/>}
                <div className="row">
                    <button className="waves-effect waves-light btn col s12">페이스북으로 로그인</button>
                </div>
            </div>
        );
    };
};
const mapStateToProps = (state) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw)=>{
            return dispatch(loginRequest(id, pw));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterFromContainer);