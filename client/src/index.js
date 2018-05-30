import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import appState from './app/store'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

let store = createStore(appState, applyMiddleware(thunk, createLogger));


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
