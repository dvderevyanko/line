import {SET_PRICELIST_CONTENT} from '../constants/constants'
import {SET_PRICELIST_CONTENT_START} from '../constants/constants'
import {SET_PRICELIST_CONTENT_SUCCESS} from '../constants/constants'
import {SET_PRICELIST_CONTENT_FAIL} from '../constants/constants'
import fetch from 'cross-fetch'

//https://redux.js.org/advanced/async-actions#actions
export function setPricelistContent(id) {
    return function (dispatch) {
        dispatch(setPricelistContentStart(id));
        //for error
        //return fetch(`1/api/price/`+id)
        return fetch(`/api/price/`+id)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("success");
                dispatch(setPricelistContentSuccess(responseJson));
            })
            .catch((error) => {
                debugger;
                dispatch(setPricelistContentFail("извините, при загрузке каталога №" + id + " возникла ошибка."));
                console.error(error);
            });
      }
}

function setPricelistContentStart(id) {
    return {
        type : SET_PRICELIST_CONTENT_START,
        payload : id
    }
}

function setPricelistContentSuccess(json) {
    return {
        type : SET_PRICELIST_CONTENT_SUCCESS,
        payload : json
    }
}

function setPricelistContentFail(errorMessage) {
    return {
        type : SET_PRICELIST_CONTENT_FAIL,
        payload : errorMessage
    }
}