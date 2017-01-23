import React, {Component} from 'react';
import HomeworkQuiz from '../containers/HomeworkQuiz';

export default class HomeworkQuizzes extends Component {

    render() {
        const {homeworkQuizzes = [], sectionIndex} = this.props;
        return (
            <div>{
                homeworkQuizzes.map((item, index) => {
                    const data = Object.assign({}, item, {
                        sectionIndex,
                        homeworkQuizIndex: index
                    });
                    return (
                        <HomeworkQuiz key={index}
                                      {...data}
                        />
                    );
                })
            }

            </div>
        );
    }
}