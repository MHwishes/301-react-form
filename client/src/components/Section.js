import {Component} from 'react';
import React from 'react';
import SectionName from './SectionName';
import HomeworkQuizzes from './HomeworkQuizzes';
import QuizAddButton from './QuizAddButton';

export default class Section extends Component {

    render() {
        return (
            <div id='section'>
                <SectionName/>
                <div className='row section-content'>
                    <HomeworkQuizzes/>
                    <QuizAddButton/>
                </div>
            </div>
        );
    }
}