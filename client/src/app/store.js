import {combineReducers} from 'redux';
import app from './app';
import main from '../main/reducer';
import about from '../about/reducer';
import contact from '../contact/reducer';
import partner from '../partner/reducer';
import priceList from '../price/reducer';
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
 