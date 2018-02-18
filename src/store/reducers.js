import C from '../constants';
import {combineReducers} from 'redux';

export const  questions = (state = {}, action) => {
    switch(action.type) {
        case C.ADD_QUESTION:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}
 export const selectedAnswers = (state = [], action) => {
     switch(action.type) {
         case C.SET_SELECTED_ANSWER:

             return [
                     ...state,
                     action.payload
                 ];

         case C.ADD_QUESTION:
             return [

             ]
         default:
             return state
     }
 }

 export const progressCounter = (state = 0, action) => {
    switch (action.type) {
        case C.SET_PROGRESS_COUNTER:
            return action.payload;
        default:
            return state;
    }

}

 export default combineReducers({
     selectedAnswers,
     questions,
     progressCounter
 });