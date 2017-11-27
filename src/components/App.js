import React from 'react';
import { Route, Switch } from 'react-router-dom';
import requiresAuth from 'containers/requiresAuth';

import MyListPage from 'components/pages/MyListPage';
import MyPage from 'components/pages/MyPage';
import RegisterPage from 'components/pages/RegisterPage';
import { ConnectedRouter } from 'react-router-redux';



class App extends React.Component {
    render() {
        return (
            <ConnectedRouter history={this.props.ReduxHistory}>
                <Switch>
                    <Route path="/signup" component={RegisterPage} />
                    <Route path="/signin" component={RegisterPage} />
                    <Route exact path="/MyPage" component={requiresAuth(MyPage)}/>
                    <Route exact path="/:map?/:sigugun?/:category?" component={requiresAuth(MyListPage)}/>
                </Switch>
            </ConnectedRouter>
        );
    }
}
export default App;