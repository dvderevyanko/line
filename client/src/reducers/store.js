import {combineReducers} from 'redux';
import app from './app';
import main from './main';
import about from './about';
import contact from './contact';
import partner from './partner';
import priceList from './priceList';
import { routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const middleware = routerMiddleware(history);

const appState = combineReducers({
    appState: app,
    mainState: main,
    aboutState: about,
    contactState: contact,
    partnerState: partner,
    priceListState: priceList,
    routerState: routerReducer,
});

export default appState;
 