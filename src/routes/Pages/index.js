import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/pages/Home';
import MyPage from '../../components/pages/MyPage';
import PlaceList from '../../components/pages/PlaceList';

class PagesRouter extends Component {
    constructor(props){
        super(props)
        this.authComponent = this.authComponent.bind('this');
    }
    authComponent(){
        this.props.history.push('/auth/login');
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/Pages/PlaceList" component={PlaceList}/>
                    <Route path="/Pages/MyPage" component={MyPage}/>
                    <Route path="/Pages/" component={Home}/>
                </Switch>
            </div>
        )
    }
}

export default PagesRouter;