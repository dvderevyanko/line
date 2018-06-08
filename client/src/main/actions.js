import {LOAD_NAV_ART_CARDS_START} from './constants'
import {LOAD_NAV_ART_CARDS_SUCCESS} from './constants'
import {LOAD_NAV_ART_CARDS_FAIL} from './constants'
import fetch from 'cross-fetch'

//https://redux.js.org/advanced/async-actions#actions
export function loadNavArtCards(id) {
    return function (dispatch) {
        dispatch(loadNavArtCardsStart(id));
        return fetch(`/api/work/all`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("success");
                dispatch(loadNavArtCardsSuccess(responseJson));
            })
            .catch((error) => {
                dispatch(loadNavArtCardsFail("извините, при загрузке карточек возникла ошибка."));
                console.error(error);
            });
      }
}

function loadNavArtCardsStart(id) {
    return {
        type : LOAD_NAV_ART_CARDS_START,
        payload : id
    }
}

function loadNavArtCardsSuccess(json) {
    return {
        type : LOAD_NAV_ART_CARDS_SUCCESS,
        payload : json
    }
}

function loadNavArtCardsFail(errorMessage) {
    return {
        type : LOAD_NAV_ART_CARDS_FAIL,
        payload : errorMessage
    }
}