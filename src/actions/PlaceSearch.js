import * as types from './AcionTypes';
import axios from 'axios';

export function BasicSearchRequest(keyword, token) {
    return (dispatch) => {
        dispatch(BasicSearch());
        return axios.post("http://localhost:7777/api/search/basicKeyword", { keyword: keyword }, { headers: { 'Content-Type': 'application/json', 'x-access-token': token } })
            .then((response) => {
                dispatch(BasicSearchSuccess(keyword, response.data));
            }).catch((error) => {
                dispatch(BasicSearchFailure());
            })
    }
};

export function BasicSearch() {
    return {
        type: types.BASIC_SEARCH
    }
};

export function BasicSearchSuccess(keyword, basicList) {
    return {
        type: types.BASIC_SEARCH_SUCCESS,
        keyword: keyword,
        basicList: basicList
    }
};

export function BasicSearchFailure() {
    return {
        type: types.BASIC_SEARCH_FAILURE
    }
}



export function NaverSearchRequest(keyword, token) {
    return (dispatch) => {
        dispatch(NaverSearch());
        return axios.post("http://localhost:7777/api/search/NaverKeyword", { keyword: keyword }, { headers: { 'Content-Type': 'application/json', 'x-access-token': token } })
            .then((response) => {
                dispatch(NaverSearchSuccess(response.data));
            }).catch((error) => {
                dispatch(NaverSearchFailure());
            })
    }
};

export function NaverSearch() {
    return {
        type: types.NAVER_SEARCH
    }
};

export function NaverSearchSuccess(NaverList) {
    return {
        type: types.NAVER_SEARCH_SUCCESS,
        NaverList: NaverList
    }
};

export function NaverSearchFailure() {
    return {
        type: types.NAVER_SEARCH_FAILURE
    }
}

export function CreateDetailRequest(PlaceInfo, token) {
    return (dispatch) => {
        return axios.post("http://localhost:7777/api/search/NaverDetail", { PlaceInfo: PlaceInfo }, { headers: { 'Content-Type': 'application/json', 'x-access-token': token } })
            .then((response) => {
                return response.data
            }).catch((error) => {
                console.log(error);
            })
    }
};


export function DetailSearchRequest(place_id, token) {
    return (dispatch) => {
        dispatch(BasicSearch());
        return axios.post("http://localhost:7777/api/search/Details", { place_id: place_id }, { headers: { 'Content-Type': 'application/json', 'x-access-token': token } }).then((response) => {
            dispatch(DetailSearchSuccess(response.data[0]));
        }).catch((error) => {
            dispatch(DetailSearchFailure());
        })
    }
};

export function DetailSearch() {
    return {
        type: types.DETAIL_SEARCH
    }
};

export function DetailSearchSuccess(detail) {
    return {
        type: types.DETAIL_SEARCH_SUCCESS,
        detailcontent: detail
    }
};

export function DetailSearchFailure() {
    return {
        type: types.DETAIL_SEARCH_FAILURE
    }
};

export function DetailAddRequest(placeDetail, userId, token) {
    return (dispatch) => {
        dispatch(addList());
        return axios.post("http://localhost:7777/api/place/addList", { addList: {placeDetail, userId} }, { headers: { 'Content-Type': 'application/json', 'x-access-token': token } }).then((response) => {
            dispatch(addListSuccess(response.data[0]));
        }).catch((error) => {
            dispatch(addListFailure());
        })
    }
}

export function addList(){
    return {
        type: types.ADD_LIST,
    }
};

export function addListSuccess(){
    return {
        type: types.ADD_LIST_SUCCESS,
    }
};

export function addListFailure(){
    return {
        type: types.ADD_LIST_FAILURE,
    }
}


export function DetailRemoveRequest(placeId, token) {
    return (dispatch) => {
        dispatch(removeList());
        return axios.post("http://localhost:7777/api/place/removeList", { placeId: placeId }, { headers: { 'Content-Type': 'application/json', 'x-access-token': token } }).then((response) => {
            dispatch(removeListSuccess(response.data[0]));
        }).catch((error) => {
            dispatch(removeListFailure());
        })
    }
}

export function removeList(){
    return {
        type: types.REMOVE_LIST,
    }
};

export function removeListSuccess(){
    return {
        type: types.REMOVE_LIST_SUCCESS,
    }
};

export function removeListFailure(){
    return {
        type: types.REMOVE_LIST_FAILURE,
    }
}
