import C from './constants';
import fetch from 'isomorphic-fetch';

export  function setSelectedAnswer(questionIndex = 0, answer) {

    return {
        type: C.SET_SELECTED_ANSWER,
        payload: {
            questionIndex,
            answer
        }
    }

}

export function setProgressCounter(questionIndex = 0) {
    return {
        type: C.SET_PROGRESS_COUNTER,
        payload: {
            progressCounter: questionIndex + 1
        }
    }
}


export function setScore(score = 0) {
    return {
        type: C.SET_SCORE,
        payload: {
            score: score
        }
    }
}

export function addQuestion(question = {}) {

    const initState = JSON.parse(sessionStorage.getItem('initialState'));
    const newInitState = {
        ...initState,
        questions: [
            ...initState.questions,
            question
        ]
    }
    sessionStorage.setItem('initialState',JSON.stringify(newInitState));
    return {
        type: C.ADD_QUESTION,
        payload: {
            question: question
        }
    }

}

export const getQuestions = () => (dispatch, getState) => {
    fetch('http://localhost:3001/api/v1/questions', {'Content-Type': 'application/json'})
        .then(results => results.json())
        .then(response => {
            //TODO: could add dispatch action to set questions state from server. For now just return default 3 questions
        })
        .catch(error => {
            console.error('[Error fetching questions ] ',error);
            //TODO: should dispatch action to handle error
        })
}

export const calculateScore = () => (dispatch, getState) => {
    //lets calculatoe our score
    let numCorrect = 0;
    const state = getState();
    const selectedAnswers = state.selectedAnswers;
    selectedAnswers.map(selectedAnswer => {

        if(selectedAnswer.answer === state.questions[selectedAnswer.questionIndex].answerKey){
            numCorrect++;
        }
    });
    const calcScore  = Math.round((numCorrect / state.questions.length) * 100);

   dispatch(setScore(calcScore));
}