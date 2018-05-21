import {SET_PRICELIST_CONTENT} from '../constants/constants'

export function setPricelistContent(title) {
    return {
        type : SET_PRICELIST_CONTENT,
        payload : title
    }
}