import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reducers from 'reducers';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { routerMiddleware } from 'react-router-redux'

const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(reducers, applyMiddleware(thunk, middleware));


ReactDOM.render(
    <Provider store={store}>
        <App ReduxHistory={history}/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();