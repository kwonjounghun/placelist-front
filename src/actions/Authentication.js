import * as types from './ActionTypes';
import axios from 'axios';

export function loginRequest(userEmail, password) {
    return (dispatch) => {
        dispatch(login());

        return axios.post("http://localhost:7777/api/user/login", { userEmail, password }, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                console.log(response.data);
                dispatch(loginSuccess(response.data));
            }).catch((error) => {
                dispatch(loginFailure());
            })
    }
};

export function login() {
    return {
        type: types.AUTH_LOGIN
    }
};

export function loginSuccess(token) {
    return {
        type: types.AUTH_LOGIN_SUCCESS,
        token : token
    }
};

export function loginFailure() {
    return {
        type: types.AUTH_LOGIN_FAILURE
    }
}