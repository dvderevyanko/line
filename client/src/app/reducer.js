import {SET_APP_CONTENT} from './constants'
import {SET_APP_CONTENT_START} from './constants'
import {SET_APP_CONTENT_SUCCESS} from './constants'
import {SET_APP_CONTENT_FAIL} from './constants'

const initialState = {
    carouselData : [],
    contactData : [],
    title : 'test',
}

export default function app(state = initialState, action) {
        switch (action.type) {
        case SET_APP_CONTENT_START : {
            return Object.assign({}, state, {isLoading : true});
        }
        case SET_APP_CONTENT_SUCCESS : {
            return Object.assign({}, state, action.payload);
        }
        case SET_APP_CONTENT_FAIL : {
            return Object.assign({}, state, {error : action.payload});
        }
        default: return state;
    }
}