import React, {Component} from 'react';

export default class QuizAddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            homeworkList: []
        };
    }

    handleClick() {
        this.setState({
            show: true
        });
    }

    render() {
        return (
            <div id='add-section' className='col-sm-2 no-padding-right'>
                <i className='fa fa-plus fa-small' onClick={this.handleClick.bind(this)}> </i>
            </div>
        );
    }
}