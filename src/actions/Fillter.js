import * as types from './ActionTypes';
import axios from 'axios';

export function ChangeFillterRequest(map, sido, sigugun, category) {
    return (dispatch) => {
        return Promise.resolve(dispatch(RememberFillter(map, sido, sigugun, category)));
    };
};

export function RememberFillter(map, sido, sigugun, category){
    return {
        type: types.REMEMBER_FILLTER,
        map,
        sido,
        sigugun,
        category
    };
};

export function GetFillterListRequest(token){
    return(dispatch)=>{
        dispatch(GetFillterList());

        return axios.get(`http://localhost:7777/api/place/getFillterList`, { headers: { 'x-access-token': token, 'Content-Type': 'application/json' } })
        .then((response) => {
            console.log(response.data);
            dispatch(GetFillterListSuccess(response.data));
        }).catch((error) => {
            dispatch(GetFillterListFailure());
        })
    }
};

export function GetFillterList(){
    return {
        type: types.GET_FILLTER_LIST
    };
};

export function GetFillterListSuccess(data){
    return {
        type: types.GET_FILLTER_LIST_SUCCESS,
        fillterList: data

    };
};

export function GetFillterListFailure(){
    return {
        type: types.GET_FILLTER_LIST_FAILURE
    };
};

export function SetFillterItemRequest(sigugun, category){
    return (dispatch) => {
        return Promise.resolve(dispatch(SetFillterItem(sigugun, category)));
    };
    
};

export function SetFillterItem (sigugun, category){
    return {
        type: types.SET_FILLTER_ITEM,
        sigugun,
        category
    };
}