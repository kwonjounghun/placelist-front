import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/pages/Home';
import MyPage from 'components/pages/MyPage';
import PlaceList from 'components/pages/PlaceList';
import PlaceDetail from 'components/pages/PlaceDetail';
import PlaceSearch from 'components/pages/PlaceSearch';
import PrivateRoute from 'components/Authentication/ProtectedRoute'

class PagesRouter extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/PlaceDetail/:id" component={PlaceDetail}/>
                    <Route path="/PlaceSearch" component={PlaceSearch}/>
                    <Route path="/PlaceList" component={PlaceList}/>
                    <Route path="/MyPage" component={MyPage}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        )
    }
}

export default PagesRouter;