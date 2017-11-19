import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MyListPage from 'components/pages/MyListPage';

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={MyListPage}/>
                    <Route path="/register" component={MyListPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;