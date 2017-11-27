import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';

import { checkTokenRequest } from 'actions/Authentication';

export default function requiresAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      if (this.props.userInfo.token !== "") {
        document.cookie = 'userInfo=' + btoa(JSON.stringify(this.props.userInfo));
      }
      const getCookie = (key) => {
        var value = "; " + document.cookie;
        var parts = value.split("; " + key + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
      };

      let userInfo = getCookie('userInfo');
      // let userInfo = JSON.parse(atob(window.sessionStorage.getItem('userInfo')));
      if (typeof userInfo === "undefined") {
        return this._checkAndRedirect();
      }

      userInfo = JSON.parse(atob(userInfo));
      if (userInfo.token === '') {
        return this._checkAndRedirect();
      };
      this.props.checkTokenRequest(userInfo.token).then(() => {
        if (this.props.checkStatus === "FAILURE") {
          userInfo = "";
          document.cookie = 'userInfo=' + btoa(JSON.stringify(userInfo));
          return this._checkAndRedirect();
        }
        return this._checkAndRedirect();
      });
    }

    _checkAndRedirect() {

      if (!this.props.valid) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return (
        <div className="authenticated">
          {this.props.valid ? <Component {...this.props} /> : null}
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      userInfo: state.authentication.status,
      isLoggedIn: state.authentication.status.isLoggedIn,
      checkStatus: state.authentication.check.status,
      valid: state.authentication.status.valid
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      checkTokenRequest: (token) => {
        return dispatch(checkTokenRequest(token));
      }
    };
  };
  return withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent));
}