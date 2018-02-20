
import React from 'react';
import  ReactDOM from 'react-dom';
import initialState from './initialState';
import {Provider} from 'react-redux';
import App from './App';
import storeFactory from './store';

if(!sessionStorage.getItem('initialState')){

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


