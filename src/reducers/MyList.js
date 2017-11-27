import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    getMyList: {
        status: 'INIT'
    },
    MyList:[]
};

export default function MyList(state, action) {
    if (typeof state === "undefined")
        state = initialState;

    switch (action.type) {
        /* LOGIN */
        case types.GET_MY_LIST:
            return update(state, {
                getMyList: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.GET_MY_LIST_SUCCESS:
            return update(state, {
                getMyList: {
                    status: { $set: 'SUCCESS' }
                },
                MyList: { $set: action.MyList }
            });
        case types.GET_MY_LIST_FAILURE:
            return update(state, {
                getMyList: {
                    status: { $set: 'FAILURE' }
                }
            });
        default:
            return state;
    }
}