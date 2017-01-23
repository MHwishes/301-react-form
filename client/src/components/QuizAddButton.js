import  {Component} from 'react';
import React from 'react';
import homeworkQuizs from '../rawData/homeworkQuizData';
import {Modal, Button} from 'react-bootstrap';
import Pagination from './Pagination';

export default class QuizAddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            homeworkList: homeworkQuizs.items
        };
    }

    handleClick() {
        this.setState({
            show: true
        });
    }

    hideModal() {
        this.setState({
            show: false
        })
    }

    handleKeyUp(event) {
        if (event.keyCode === 13) {
            const search = this.search.value.trim();
            if (search) {
                const resultItem = homeworkQuizs.items.filter((item, index)=> {
                    return item.title === search;
                });
                this.setState({
                    homeworkList: resultItem
                });
            }
        }
    }

    render() {

        let homeworkListHTML = this.state.homeworkList.map((item, index) => {
            return <tr key={index}>
                <th scope='row'>
                    <input type='checkbox' name='homework' value={'test' + item._id}/>
                </th>
                <td> {item.title}</td>
                <td> {'张三'}</td>
                <td> {'2015.5.12'}</td>
            </tr>;
        });

        const noResult = <div className='center-block'>没有找到相应的结果</div>;

        return (
            <div id='add-section'>
                <div className='col-sm-2 no-padding-right'>
                    <i className='fa fa-plus fa-small' onClick={this.handleClick.bind(this)}> </i>
                </div>

                <div className={this.state.show ? '' : 'hidden'}>
                    <div className='static-modal'>
                        <Modal.Dialog>
                            <Modal.Header id='contained-modal-title-lg'>
                                <Modal.Title>
                                    <div className='inline-title'>
                                        <label className='col-sm-3'>试卷列表</label>
                                        <div className='inline-title col-sm-offset-4 turn-right'>
                                            Search
                                            <input type='text' className='form-width form-control'
                                                   ref={(ref) => {
                                                       this.search = ref;
                                                   }}
                                                   onKeyUp={this.handleKeyUp.bind(this)}
                                            />
                                        </div>
                                    </div>
                                    <i className='fa fa-times pull-right red'
                                       onClick={this.hideModal.bind(this)}> </i>
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                { this.state.show && homeworkQuizs.totalCount !== 0
                                    ? <div>
                                    <table className='table table-striped table-bordered table-hover'>
                                        <thead>
                                        <tr className='form-title'>
                                            <th></th>
                                            <th className='sorting'> 题目名称</th>
                                            <th className='sorting'> 创建者</th>
                                            <th className='sorting'> 创建时间</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {homeworkListHTML}
                                        </tbody>
                                    </table>

                                    <Pagination className='pagination' totalPage={homeworkQuizs.totalCount}
                                                currentPage={1}/>

                                </div> : noResult
                                }

                            </Modal.Body>

                            <Modal.Footer>
                                <Button>确定</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                </div>
            </div>

        );
    }
}