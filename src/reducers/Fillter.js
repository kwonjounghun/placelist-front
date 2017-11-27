import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    fillterList: {
        status: 'INIT'
    },
    fillter: {
        sigugun: null,
        category: null
    },
    fillterSeleted: {
        map: false,
        sigugun: null,
        category: null
    }
};

export default function Fillter(state, action) {
    if (typeof state === "undefined")
        state = initialState;

    switch (action.type) {
        /* LOGIN */
        case types.GET_FILLTER_LIST:
            return update(state, {
                fillterList: {
                    $set: 'WAITING'
                }
            });
        case types.GET_FILLTER_LIST_SUCCESS:
            return update(state, {
                fillterList: {
                    $set: 'SUCCESS'
                },
                fillter: {
                    sido: { $set: action.fillterList.sido },
                    sigugun: { $set: action.fillterList.sigugun },
                    category: { $set: action.fillterList.category }
                }
            });
        case types.GET_FILLTER_LIST_FAILURE:
            return update(state, {
                fillterList: {
                    $set: 'FAILURE'
                }
            });
        case types.SET_FILLTER_ITEM:
            return update(state, {
                fillterSeleted: {
                    sigugun: { $set: action.sigugun },
                    category: { $set: action.category }
                }
            });
        default:
            return state;
    }
}
