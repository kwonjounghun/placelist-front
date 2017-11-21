import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
        status: 'INIT'
    },
    check: {
        status: 'INIT'
    },
    status: {
        valid: false,
        isLoggedIn: false,
        currentUser: '',
        token: ''
    }
};

export default function authentication(state, action) {
    if (typeof state === "undefined")
        state = initialState;

    switch (action.type) {
        /* LOGIN */
        case types.AUTH_LOGIN:
            return update(state, {
                login: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: { $set: 'SUCCESS' }
                },
                status: {
                    isLoggedIn: { $set: true },
                    token: {$set: action.token}
                }
            });
        case types.AUTH_LOGIN_FAILURE:
            return update(state, {
                login: {
                    status: { $set: 'FAILURE' }
                }
            });
        case types.CHECK_TOKEN:
            return update(state, {
                check: {
                    status: { $set: 'WAITING' }
                },
                status: {
                    isLoggedIn: { $set: true }
                }
            });
        case types.CHECK_TOKEN_SUCCESS:
            return update(state, {
                check: {
                    status: { $set: 'SUCCESS' }
                },
                status: {
                    currentUser: { $set: action.username },
                    token: { $set: action.token },
                    valid: { $set: true }
                }
            });
        case types.CHECK_TOKEN_FAILURE:
            return update(state, {
                check: {
                    status: { $set: 'FAILURE' }
                }
            });
        default:
            return state;
    }
}