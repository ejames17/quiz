import C from '../constants';
import {combineReducers} from 'redux';

export const  questions = (state = {}, action) => {
    switch(action.type) {
        case C.ADD_QUESTION:
            return [
                ...state,
                action.payload.question
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

         default:
             return state
     }
 }

 export const progressCounter = (state = 0, action) => {
    switch (action.type) {
        case C.SET_PROGRESS_COUNTER:
            return action.payload.progressCounter;
        default:
            return state;
    }

}

export const score = (state = 0, action) => {
    switch (action.type) {
        case C.SET_SCORE:
            return action.payload.score;
        default:
            return state;
    }
}

 export default combineReducers({
     selectedAnswers,
     questions,
     score,
     progressCounter,

 });