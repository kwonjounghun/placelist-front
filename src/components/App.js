import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MyListPage from 'components/pages/MyListPage';
import RegisterPage from 'components/pages/RegisterPage';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/signup" component={RegisterPage} />
                    <Route path="/signin" component={RegisterPage} />
                    <Route path="/" component={MyListPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;