import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import SectionAddButton from '../components/SectionAddButton';

const mapDispatchToProps = (dispatch) => {
    return {
        handleSectionList: (data) => {
            dispatch({type: 'ADD_SECTION', data});
        }
    };
};

export default connect(()=> {
    return {}
}, mapDispatchToProps)(withRouter(SectionAddButton));
