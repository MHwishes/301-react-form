import {Component} from 'react';
import React from 'react';

export default class LogicPuzzle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogicHomeWork: true
        }
    }

    render() {
        return (
            <div id='paper-logic'>
                <div className='row'>
                    <label className='col-sm-2 text-right'> 逻辑题</label>
                    <div className='col-sm-6'>
                        <input type='checkbox' className='checkbox-info'/>
                    </div>
                </div>

                <div className='row'>
                    <span className='col-xs-offset-3 col-xs-1 logic-homeWork-info'>简单</span>
                    <div className='col-xs-1 no-padding'>
                        <input type='text' className='form-control'/>
                    </div>

                    <span className='col-xs-1  logic-homeWork-info'>一般</span>
                    <div className='col-xs-1 no-padding'>
                        <input type='text' className='form-control'/>
                    </div>

                    <span className='col-xs-1  logic-homeWork-info'>困难</span>
                    <div className='col-xs-1 no-padding'>
                        <input type='text' className='form-control'/>
                    </div>

                </div>
            </div>
        );
    }
}