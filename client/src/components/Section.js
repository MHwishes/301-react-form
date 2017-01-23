import {Component} from 'react';
import React from 'react';
import SectionName from '../containers/SectionName';
import HomeworkQuizzes from './HomeworkQuizzes';
import QuizAddButton from './QuizAddButton';

export default class Section extends Component {

    render() {

        return (
            <div id='section'>
                <SectionName title={this.props.title} sectionIndex={this.props.index}/>
                <div className='row section-content'>
                    <HomeworkQuizzes sectionIndex={this.props.index} homeworkQuizzes={this.props.definition.quizzes}/>
                    <QuizAddButton sectionIndex={this.props.index}/>
                </div>
            </div>
        );
    }
}