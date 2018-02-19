import Question from '../ui/Question';
import {setSelectedAnswer, setProgressCounter} from '../../actions';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        question : state.questions[state.progressCounter].question,
        currentQuestion: state.progressCounter,
        choices: state.questions[state.progressCounter].choices,
        questionIndex: state.progressCounter
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



        }
    }
}



const Container = connect(mapStateToProps, mapDispatchToProps)(Question);

export default  Container;