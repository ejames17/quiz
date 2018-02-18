import C from '../constants';
import appReducer from './reducers';
import { createStore } from 'redux';


export default (intialState = {}) => {
    return createStore(appReducer, intialState);
}