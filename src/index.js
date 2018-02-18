
import React from 'react';
import  ReactDOM from 'react-dom';
import { setSelectedAnswer, setProgressCounter } from './actions';
import initialState from './initialState';
import {Provider} from 'react-redux';
import App from './App';
import storeFactory from './store';

const store = storeFactory(initialState);
window.store = store;
console.log('init state ', store.getState());


/*store.dispatch({
    type: C.ADD_QUESTION,
    payload:  {
        "question": "The English political philosopher Thomas Hobbes explains that when a government abuses its power, its citizens have a right to:",
        "choices": {
            "a": "negotiate with the government and ask that it stop its abuses",
            "b": "ask other nations or groups such as the United Nations for help",
            "c": "replace that government with a new one",
            "d": "have to learn to accept a dictatorship"
        },
        "answerKey": "d"
    }
});*/
store.dispatch( setSelectedAnswer(1, 'a') );
store.dispatch( setProgressCounter(0) );

console.log('new state ', store.getState());

ReactDOM.render(

    <Provider store={store}>
        <App/>
    </Provider>,

document.getElementById('root'));
//const store = createStore(appReducer);
//console.log('initiial state ', store.getState());
/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

