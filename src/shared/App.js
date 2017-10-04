import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../components';


import Router from '../routes'


class App extends Component {
    
    render() {
        return (
            <div>
                <Router/>
            </div>
        );
    }
}


export default App;