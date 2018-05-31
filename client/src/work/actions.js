import {LOAD_ART_CARDS_START} from './constants'
import {LOAD_ART_CARDS_SUCCESS} from './constants'
import {LOAD_ART_CARDS_FAIL} from './constants'
import {LOAD_ARTICLE_START} from './constants'
import {LOAD_ARTICLE_SUCCESS} from './constants'
import {LOAD_ARTICLE_FAIL} from './constants'
import fetch from 'cross-fetch'

//https://redux.js.org/advanced/async-actions#actions
export function loadArtCards() {
    return function (dispatch) {
        dispatch(loadArtCardsStart());
        return fetch(`/api/work`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(LOAD_ART_CARDS_SUCCESS);
                dispatch(loadArtCardsSuccess(responseJson));
            })
            .catch((error) => {
                console.log(LOAD_ART_CARDS_FAIL);
                dispatch(loadArtCardsFail("извините, при загрузке карточек возникла ошибка."));
                console.error(error);
            });
      }
}

function loadArtCardsStart() {
    return {
        type : LOAD_ART_CARDS_START,
    }
}

function loadArtCardsSuccess(json) {
    return {
        type : LOAD_ART_CARDS_SUCCESS,
        payload : json
    }
}

function loadArtCardsFail(errorMessage) {
    return {
        type : LOAD_ART_CARDS_FAIL,
        payload : errorMessage
    }
}



export function loadArticle(id) {
    return function (dispatch) {
        dispatch(loadArticleStart());
        return fetch(`/api/work/`+id)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(LOAD_ARTICLE_SUCCESS);
                dispatch(loadArticleSuccess(responseJson));
            })
            .catch((error) => {
                console.log(LOAD_ARTICLE_FAIL);
                dispatch(loadArticleFail("извините, при загрузке статьи №" + id + " возникла ошибка."));
                console.error(error);
            });
      }
}

function loadArticleStart() {
    return {
        type : LOAD_ARTICLE_START,
    }
}

function loadArticleSuccess(json) {
    return {
        type : LOAD_ARTICLE_SUCCESS,
        payload : json
    }
}

function loadArticleFail(errorMessage) {
    return {
        type : LOAD_ARTICLE_FAIL,
        payload : errorMessage
    }
}