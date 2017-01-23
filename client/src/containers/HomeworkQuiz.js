import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import HomeworkQuiz from '../components/HomeworkQuiz';

const mapDispatchToProps = (dispatch)=> {
    return {
        onRemoveHomeworkQuiz: (data) => {
            dispatch({type: 'REMOVE_HOMEWORK_QUIZ', data});
        }
    };
};

export default connect(() => {
    return {};
}, mapDispatchToProps)(withRouter(HomeworkQuiz));