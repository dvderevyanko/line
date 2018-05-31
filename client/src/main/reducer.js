import {LOAD_NAV_ART_CARDS} from './constants'
import {LOAD_NAV_ART_CARDS_START} from './constants'
import {LOAD_NAV_ART_CARDS_SUCCESS} from './constants'
import {LOAD_NAV_ART_CARDS_FAIL} from './constants'

const initialState = {
    navCards : [],
    artCards : []
}

export default function main(state = initialState, action) {
    switch (action.type) {
    case LOAD_NAV_ART_CARDS_START : {
        return Object.assign({}, state, {isLoading : true});
    }
    case LOAD_NAV_ART_CARDS_SUCCESS : {
        return Object.assign({}, state, action.payload);
    }
    case LOAD_NAV_ART_CARDS_FAIL : {
        return Object.assign({}, state, {error : action.payload});
    }
    default: return state;
}
}