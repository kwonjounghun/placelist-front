import authentication from 'reducers/authentication';
import MyList from 'reducers/MyList';

import { routerReducer } from 'react-router-redux';


import { combineReducers } from 'redux';

export default combineReducers({
    authentication,
    MyList,
    router: routerReducer
});