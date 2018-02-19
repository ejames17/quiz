
import React from 'react';
import  ReactDOM from 'react-dom';
import initialState from './initialState';
import {Provider} from 'react-redux';
import App from './App';
import storeFactory from './store';

console.info('getting items -------- ', sessionStorage.getItem('initialState'));
if(!sessionStorage.getItem('initialState')){
    console.info('setting initial state');
    sessionStorage.setItem('initialState', JSON.stringify(initialState));
}
const state = JSON.parse(sessionStorage.getItem('initialState'));
const store = storeFactory(state);
window.store = store;

ReactDOM.render(

    <Provider store={store}>
        <App/>
    </Provider>,

document.getElementById('root'));


