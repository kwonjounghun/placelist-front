import * as types from '../actions/AcionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
        status: 'INIT'
    },
    status: {
        valid: false,
        isLoggedIn: false,
        token: '',
        currentUser: '',
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
                    token: { $set: action.token }
                }
            });
        case types.AUTH_LOGIN_FAILURE:
            return update(state, {
                login: {
                    status: { $set: 'FAILURE' }
                }
            });
        case types.AUTH_GET_STATUS:
            return update(state, {
                status: {
                    isLoggedIn: { $set: true }
                }
            });
        case types.AUTH_GET_STATUS_SUCCESS:
            return update(state, {
                status: {
                    valid: { $set: true },
                    currentUser: { $set: action.userEmail }
                }
            });
        case types.AUTH_GET_STATUS_FAILURE:
            return update(state, {
                status: {
                    valid: { $set: false },
                    isLoggedIn: { $set: false }
                }
            });
        case types.AUTH_LOGOUT:
            return update(state, {
                status: {
                    valid: { $set: false },
                    isLoggedIn: { $set: false },
                    token: { $set: '' },
                    currentUser: { $set: '' }
                }
            });
        default:
            return state;
    }
}