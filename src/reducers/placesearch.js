import * as types from 'actions/AcionTypes';
import update from 'react-addons-update';

const initialState = {
    search: {
        status: 'INIT'
    },
    keyword: null,
    places: {
        basicList: [],
        googleList: [],
        NaverList: [],
    },
    detailcontent: {},
    isNaver: false
};

export default function placesearch(state, action) {
    if (typeof state === "undefined")
        state = initialState;

    switch (action.type) {
        /* LOGIN */
        case types.BASIC_SEARCH:
            return update(state, {
                search: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.BASIC_SEARCH_SUCCESS:
            return update(state, {
                search: {
                    status: { $set: 'SUCCESS' }
                },
                places: {
                    basicList: { $set: action.basicList },
                },
                isNaver: {
                    $set: true
                },
                keyword: { $set: action.keyword }
            });
        case types.BASIC_SEARCH_FAILURE:
            return update(state, {
                search: {
                    status: { $set: 'FAILURE' }
                }
            });
        case types.NAVER_SEARCH:
            return update(state, {
                search: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.NAVER_SEARCH_SUCCESS:
            return update(state, {
                search: {
                    status: { $set: 'SUCCESS' }
                },
                places: {
                    NaverList: { $set: action.NaverList },
                }
            });
        case types.NAVER_SEARCH_FAILURE:
            return update(state, {
                search: {
                    status: { $set: 'FAILURE' }
                }
            });
        case types.DETAIL_SEARCH:
            return update(state, {
                search: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.DETAIL_SEARCH_SUCCESS:
            return update(state, {
                search: {
                    status: { $set: 'SUCCESS' }
                },
                detailcontent: { $set: action.detailcontent }
            });
        case types.DETAIL_SEARCH_FAILURE:
            return update(state, {
                search: {
                    status: { $set: 'FAILURE' }
                }
            });
        default:
            return state;
    }
}