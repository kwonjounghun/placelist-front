import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from 'components/Authentication/Login';
import Register from 'components/Authentication/Register';


class AuthRouter extends Component {
    
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/auth/login" component={Login}/>
                    <Route path="/auth/register" component={Register}/>
                </Switch>
            </div>
        )
    }
}

export default AuthRouter;