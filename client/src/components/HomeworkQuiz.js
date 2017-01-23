import React, {Component} from 'react';
import homeworkQuizs from '../rawData/homeworkQuizData';

export default class HomeworkQuiz extends Component {

    removeHomeworkQuiz(sectionIndex, homeworkQuizIndex) {
        const data = {sectionIndex, homeworkQuizIndex};

        this.props.onRemoveHomeworkQuiz(data);
    }

    render() {

        const {sectionIndex, homeworkQuizIndex} = this.props;
        const homeworkQuiz = homeworkQuizs.items.find((homeworkQuiz)=> {
            return homeworkQuiz._id === this.props.quizId;
        });

        return (
            <div className='col-sm-2' id='homeWork-quiz'>
                <div className='homework-title'>
                    <h4 className='title-header no-margin'>
                        <span>{homeworkQuiz.title}</span>
                        <i className='fa fa-times pull-right'
                           onClick={this.removeHomeworkQuiz.bind(this, sectionIndex, homeworkQuizIndex)}> </i>
                    </h4>
                </div>
            </div>
        );
    }
}