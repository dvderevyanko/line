import {SET_PRICELIST_CONTENT} from '../constants/constants'
import {SET_PRICELIST_CONTENT_START} from '../constants/constants'
import {SET_PRICELIST_CONTENT_SUCCESS} from '../constants/constants'
import {SET_PRICELIST_CONTENT_FAIL} from '../constants/constants'
import repairBrakeCaliper from '../components/template/pricelist/repairBrakeCaliper'
import mainPricelist from '../components/template/pricelist/mainPricelist'

const initialState = {
    navList : [],
    title : '',
    content : '',
    keywords : '',
    description : '',
    isLoading : false,
    error : ''
}

export default function priceList(state = initialState, action) {
        switch (action.type) {
        case SET_PRICELIST_CONTENT_START : {
            return Object.assign({}, state, {isLoading : true});
        }
        case SET_PRICELIST_CONTENT_SUCCESS : {
            var currentNavList = state.navList;
            if (action.payload.navList) {
                currentNavList = action.payload.navList;
            } 
            return { ...state, ...action.payload, isLoading : false, navList : currentNavList }
        }
        case SET_PRICELIST_CONTENT_FAIL : {
            debugger;
            return Object.assign({}, state, {error : action.payload});
        }
        default: return state;
    }
}