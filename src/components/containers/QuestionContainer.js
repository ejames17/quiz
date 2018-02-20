import Question from '../ui/Question';
import {setSelectedAnswer, setProgressCounter, calculateScore} from '../../actions';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        question : (state.progressCounter < state.questions.length) ? state.questions[state.progressCounter].question: '',
        currentQuestion: state.progressCounter,
        choices: (state.progressCounter < state.questions.length) ? state.questions[state.progressCounter].choices: '',
        questionIndex: state.progressCounter,
        inProgress: (state.progressCounter < state.questions.length),
        score: state.score
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onSelectAnswer:(e) => {
            const question = JSON.parse(e.target.value);
            dispatch(

                setSelectedAnswer(question.questionIndex, question.answer),

            );
            dispatch(

                setProgressCounter(question.questionIndex),

            )
            dispatch(

                calculateScore(),

            )



        }
    }
}



const Container = connect(mapStateToProps, mapDispatchToProps)(Question);

export default  Container;