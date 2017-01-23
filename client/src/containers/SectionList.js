import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import SectionList from '../components/SectionList';

const mapStateToProps = (paperInfo)=> {
    let sections;
    if (paperInfo.sections) {
        sections = paperInfo.sections.filter((item)=>item.type === 'homeworkQuiz')
    }
    return {sections};
};

export default connect(mapStateToProps, () => {
    return {};
})(withRouter(SectionList));
