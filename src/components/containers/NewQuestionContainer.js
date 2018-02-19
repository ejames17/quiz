import NewQuestion from '../ui/NewQuestion';
import {addQuestion, getQuestions} from '../../actions';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
    }

}

const mapDispatchToProps = dispatch => {
    return {
        addQuestion:(question) => {
            dispatch(

                addQuestion(question)

            );

            dispatch(
              getQuestions()
            )




        }
    }
}



const Container = connect(mapStateToProps, mapDispatchToProps)(NewQuestion);

export default  Container;