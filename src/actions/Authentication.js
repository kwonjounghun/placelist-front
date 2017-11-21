import * as types from './ActionTypes';
import axios from 'axios';

export function loginRequest(userEmail, password) {
    return (dispatch) => {
        dispatch(login());

        return axios.post("http://localhost:7777/api/user/login", { userEmail, password }, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                console.log(response.data.token);
                dispatch(loginSuccess(response.data.token));
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
        token: token
    }
};

export function loginFailure() {
    return {
        type: types.AUTH_LOGIN_FAILURE
    }
}

export function checkTokenRequest(token) {
    return (dispatch) => {
        dispatch(ckeckToken());
        return axios.get('http://localhost:7777/api/user/check', { headers: { 'x-access-token': token, 'Content-Type': 'application/json' } })
            .then((response) => {
                return dispatch(ckeckTokenSuccess(response.data.info.username, token));
            }).catch((error) => {
                dispatch(ckeckTokenFailure());
            });
    };
}

export function ckeckToken(){
    return {
        type: types.CHECK_TOKEN
    }
}

export function ckeckTokenSuccess(username, token){
    return {
        type: types.CHECK_TOKEN_SUCCESS,
        username,
        token
    }
}

export function ckeckTokenFailure(){
    return {
        type: types.CHECK_TOKEN_FAILURE
    }
}