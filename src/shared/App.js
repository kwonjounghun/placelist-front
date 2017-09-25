import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../components';
import Router from '../routes'
import axios from 'axios';


class App extends Component {
    componentDidMount() {
        axios.post('http://localhost:7777/api/search/basicKeyword',{keyword: "아인해즈"})
             .then(response => console.log(response.data));
    }
    render() {
        return (
            <div>
                <Header/>
                <Router/>
            </div>
        );
    }
}

export default App;