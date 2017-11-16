import * as types from './AcionTypes';
import axios from 'axios';


export function GetPlaceListRequest(token) {
    return (dispatch) => {
        dispatch(GetPlaceList());
        return axios.get("http://localhost:7777/api/place/getList", { headers: { 'Content-Type': 'application/json', 'x-access-token': token } })
            .then((response) => {
                dispatch(GetPlaceListSuccess(response.data[0].placeList));
            }).catch((error) => {
                dispatch(GetPlaceListFailure());
            })
    }
};

export function GetPlaceList() {
    return {
        type: types.GET_PLACELIST
    }
};

export function GetPlaceListSuccess(placeList) {
    return {
        type: types.GET_PLACELIST_SUCCESS,
        placeList: placeList
    }
};

export function GetPlaceListFailure() {
    return {
        type: types.GET_PLACELIST_FAILURE
    }
}