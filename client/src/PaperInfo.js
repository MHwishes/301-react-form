import {Component} from 'react';
import React from 'react';


export default class PaperInfo extends Component {

    render() {
        return (
            <div id='paper-info'>
                <div className='row'>
                    <label className='col-sm-2 label-control'> 试卷名称：</label>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control' placeholder='请输入试卷名称'/>
                    </div>
                </div>
                <div className='row'>
                    <label className='col-sm-2  label-control'>试卷描述：</label>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control' placeholder='请输入试卷描述'/>
                    </div>
                </div>
            </div>
        );
    }
}