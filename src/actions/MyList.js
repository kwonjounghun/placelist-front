import * as types from './ActionTypes';
import axios from 'axios';

export function GetMyListRequest(sigugun, category, token) {
    return (dispatch) => {
        dispatch(GetMyList());

        return axios.get(`http://localhost:7777/api/place/getList/${sigugun}/${category}`, { headers: { 'x-access-token': token, 'Content-Type': 'application/json' } })
            .then((response) => {
                console.log(response.data);
                dispatch(GetMyListSuccess(response.data[0].placeList));
            }).catch((error) => {
                dispatch(GetMyListFailure());
            })
    }
};

export function GetMyList() {
    return {
        type: types.GET_MY_LIST
    }
};

export function GetMyListSuccess(MyList) {
    return {
        type: types.GET_MY_LIST_SUCCESS,
        MyList
    }
};

export function GetMyListFailure() {
    return {
        type: types.GET_MY_LIST_FAILURE
    }
}