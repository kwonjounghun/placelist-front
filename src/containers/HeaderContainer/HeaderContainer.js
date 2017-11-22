import React from 'react';
import Header from 'components/organisms/Header';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { SignOutRequest } from 'actions/Authentication';

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);
    }
    handleSignOut(e) {
        e.preventDefault();
        this.props.SignOutRequest().then(
            () => {
                let userInfo = "";
                document.cookie = 'userInfo=' + btoa(JSON.stringify(userInfo));
                this.props.history.push("/signin");
            }
        )
    }
    render() {
        return (
            <Header signout={this.handleSignOut}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignOutRequest: () => {
            return dispatch(SignOutRequest());
        }
    };
};

export default withRouter(connect(null, mapDispatchToProps)(HeaderContainer));