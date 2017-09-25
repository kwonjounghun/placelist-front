import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, MyPage, PlaceList } from '../components/pages';

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/MyPage" component={MyPage}/>
                    <Route exact path="/PlaceList" component={PlaceList}/>
                </Switch>
            </div>
        )
    }
}

export default Router;