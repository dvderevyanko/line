import {SET_APP_CONTENT} from './constants'
import {SET_APP_CONTENT_START} from './constants'
import {SET_APP_CONTENT_SUCCESS} from './constants'
import {SET_APP_CONTENT_FAIL} from './constants'
import fetch from 'cross-fetch'

//https://redux.js.org/advanced/async-actions#actions
export function setAppContent(id) {
    return function (dispatch) {
        dispatch(setAppContentStart(id));
        return fetch(`/api/app`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("success");
                debugger;
                dispatch(setAppContentSuccess(responseJson));
            })
            .catch((error) => {
                debugger;
                dispatch(setAppContentFail("извините, при загрузке статического контента возникла ошибка."));
                console.error(error);
            });
      }
}

function setAppContentStart(id) {
    return {
        type : SET_APP_CONTENT_START,
        payload : id
    }
}

function setAppContentSuccess(json) {
    return {
        type : SET_APP_CONTENT_SUCCESS,
        payload : json
    }
}

function setAppContentFail(errorMessage) {
    return {
        type : SET_APP_CONTENT_FAIL,
        payload : errorMessage
    }
}