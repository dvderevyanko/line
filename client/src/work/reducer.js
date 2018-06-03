import {LOAD_ART_CARDS_START} from './constants'
import {LOAD_ART_CARDS_SUCCESS} from './constants'
import {LOAD_ART_CARDS_FAIL} from './constants'
import {LOAD_ARTICLE_START} from './constants'
import {LOAD_ARTICLE_SUCCESS} from './constants'
import {LOAD_ARTICLE_FAIL} from './constants'

const initialState = {
    artCards : [],
    title : "Наши работы",
    content : ``,
    keywords : "",
    description : ""
}

export default function work(state = initialState, action) {
    switch (action.type) {
    case LOAD_ART_CARDS_START : {
        return Object.assign({}, state, {isLoading : true});
    }
    case LOAD_ART_CARDS_SUCCESS : {
        return { ...state, ...action.payload, title : "Наши работы"}
    }
    case LOAD_ART_CARDS_FAIL : {
        return Object.assign({}, state, {error : action.payload});
    }
    case LOAD_ARTICLE_START : {
        return Object.assign({}, state, {isLoading : true});
    }
    case LOAD_ARTICLE_SUCCESS : {
        return { ...state, ...action.payload, artCards : []}
    }
    case LOAD_ARTICLE_FAIL : {
        return Object.assign({}, state, {error : action.payload});
    }
    default: return state;
}
}