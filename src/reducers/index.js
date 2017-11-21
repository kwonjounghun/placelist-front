import authentication from 'reducers/authentication';

import { routerReducer } from 'react-router-redux';


import { combineReducers } from 'redux';

export default combineReducers({
    authentication,
    router: routerReducer
});