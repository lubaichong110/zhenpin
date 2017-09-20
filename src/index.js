import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./iconfont/iconfont.css"
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css';
import {
    createStore,
    combineReducers
} from 'redux'
import {
    connect,
    Provider
} from 'react-redux'
import ReducerObj from "./reducers/index.js"

const store = createStore(ReducerObj, {});

const renderPage = () => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
store.subscribe(renderPage)
renderPage()
registerServiceWorker();