import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

class RouterComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const router = (
            <Route path={this.props.path} component={this.props.component} />
        );
        const redirect = (
            <Redirect to={{ pathname: '/auth/login' }} />
        );

        return (
            <div>
                {this.props.valid === true ? router : redirect}
            </div>
        )
    }
}

export default RouterComponent;