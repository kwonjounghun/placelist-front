import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store = {store}>
        <Root />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();