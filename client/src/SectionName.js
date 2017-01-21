import {Component} from 'react';
import React from 'react';

export default class SectionName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            writable: true,
            showModal: 'hidden'
        };
    }

    editTitle() {
        this.setState({
            writable: true
        });
    }

    addTitle() {
        this.setState({
            writable: false
        });
    }

    render() {
        return (
            <div id='section-name' className='row'>
                <div className='col-sm-3'>
                    <input type='text'
                           ref={(ref) => {
                               this.title = ref;
                           }}
                           className={this.state.writable ? 'form-control' : 'form-control read-only'}
                           readOnly={this.state.writable ? '' : 'readOnly'}
                           onBlur={this.state.writable ? this.addTitle.bind(this) : ''}
                    />
                </div>
                <div className='col-sm-1 icon'>
                    <i className={this.state.writable ? 'hidden' : 'fa fa-pencil-square-o'}
                       onClick={this.editTitle.bind(this)}>
                    </i>
                </div>

                
            </div>
        );
    }
}