import authentication from 'reducers/authentication';
import MyList from 'reducers/MyList';
import Fillter from 'reducers/Fillter';

import { routerReducer } from 'react-router-redux';


import { combineReducers } from 'redux';

export default combineReducers({
    authentication,
    MyList,
    Fillter,
    router: routerReducer
});