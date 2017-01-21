import React, {Component} from 'react';

export default class SectionAddButton extends Component {

    showSection() {
        const section = {quizzes: [], title: '编程题', type: 'homeworkQuiz'};
    }

    render() {
        return (
            <div id='paper-add-section' className='col-xs-12 no-padding'>

                <div className='add-button-section text-center'>
                    <i className='fa fa-plus' onClick={this.showSection.bind(this)}> </i>
                </div>
            </div>
        );
    }
}