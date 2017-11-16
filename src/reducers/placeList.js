import * as types from 'actions/AcionTypes';
import update from 'react-addons-update';

const initialState = {
    getList: {
        status: 'INIT'
    },
    myList: [],
    status: false
};

export default function placeList(state, action) {
    if (typeof state === "undefined")
        state = initialState;

    switch (action.type) {
        case types.GET_PLACELIST:
            return update(state, {
                getList: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.GET_PLACELIST_SUCCESS:
            return update(state, {
                getList: {
                    status: { $set: 'SUCCESS' }
                },
                myList: { $set: action.placeList }
            });
        case types.GET_PLACELIST_FAILURE:
            return update(state, {
                getList: {
                    status: { $set: 'FAILURE' }
                }
            });
        case types.ADD_LIST:
            return update(state, {
                getList: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.ADD_LIST_SUCCESS:
            return update(state, {
                getList: {
                    status: { $set: 'SUCCESS' }
                },
                status: { $set: true }
            });
        case types.ADD_LIST_FAILURE:
            return update(state, {
                getList: {
                    status: { $set: 'FAILURE' }
                },
                status: { $set: false }
            });
        case types.REMOVE_LIST:
            return update(state, {
                getList: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.REMOVE_LIST_SUCCESS:
            return update(state, {
                getList: {
                    status: { $set: 'SUCCESS' }
                },
                status: { $set: false }
            });
        case types.REMOVE_LIST_FAILURE:
            return update(state, {
                getList: {
                    status: { $set: 'FAILURE' }
                },
                status: { $set: true }
            });
        default:
            return state;
    }
}