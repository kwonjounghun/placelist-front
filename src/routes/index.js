import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Pages, Authentication} from '../components';
import PrivateRoute from '../components/Authentication/ProtectedRoute'

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <PrivateRoute path="/Pages" component={Pages}/>
                    <Route path="/Auth" component={Authentication}/>
                </Switch>
            </div>
        )
    }
}


export default Router;