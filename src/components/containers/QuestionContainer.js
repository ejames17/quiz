import Question from '../ui/Question';
import {setSelectedAnswer} from '../../actions';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    console.log('map state to props ', state.questions[state.progressCounter], ' counter is ',state.progressCounter);
    return {
        question : state.questions[state.progressCounter].question,
        currentQuestion: state.progressCounter,
        choices: state.questions[state.progressCounter].choices
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onSelectAnswer:(questionIndex, key) => {
            console.log('dispatch fired==========', questionIndex, key);
            dispatch(
                setSelectedAnswer(questionIndex, key)
            )
        }
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Question);

export default  Container;