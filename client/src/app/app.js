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
            debugger;
            return Object.assign({}, state, action.payload);
            //return { ...state, ...action.payload}
        }
        case SET_APP_CONTENT_FAIL : {
            return Object.assign({}, state, {error : action.payload});
        }
        default: return state;
    }
}

/*const initialState = {
    carouselData : [
        {
            img : "assets/carousel/3.jpg",
            title : "Гарантированное качество",
            text : "Автосервис с безупречной репутацией."
        },
        {
            img : "assets/carousel/2.jpg",
            title : "Демократичные цены",
            text : "Таких цен в городе больше нет."
        }
    ],
    title : "test"
}
export default function app(state = initialState) {
    return state;
}*/