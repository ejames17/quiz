import thunk from 'redux-thunk';

import appReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';


export default (intialState = {}) => {
    return applyMiddleware(thunk)(createStore)(appReducer, intialState);
}