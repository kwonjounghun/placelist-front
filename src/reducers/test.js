import * as types from 'actions/AcionTypes';
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

    switch (0) {
        /* LOGIN */
        default:
            return state;
    }
}