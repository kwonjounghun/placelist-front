import authentication from 'reducers/authentication';
import placesearch from 'reducers/placesearch';
import placeList from 'reducers/placeList';

import { combineReducers } from 'redux';

export default combineReducers({
    authentication,
    placesearch,
    placeList
});