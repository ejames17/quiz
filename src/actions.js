import C from './constants';

export  function setSelectedAnswer(questionIndex = 0, answer) {

    return {
        type: C.SET_SELECTED_ANSWER,
        payload: {
            questionIndex,
            answer
        }
    }

}

export function setProgressCounter(progessCounter = 0) {
    return {
        type: C.SET_PROGRESS_COUNTER,
        payload: progessCounter
    }
}

