import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Pages, Authentication} from 'components';
import PrivateRoute from 'components/Authentication/ProtectedRoute'

class Router extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/Auth" component={Authentication}/>
                    <PrivateRoute path="/" component={Pages}/>
                </Switch>
            </div>
        )
    }
}


export default Router;