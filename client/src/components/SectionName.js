import {Component} from 'react';
import React from 'react';
import {Modal, Button} from 'react-bootstrap';

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
        this.props.onAddTitle(this.title.value, this.props.sectionIndex);
    }

    closeBody() {
        this.setState({
            showModal: ''
        });
    }

    cancelButton() {
        this.setState({
            showModal: 'hidden'
        });
    }

    confirmButton() {

        this.setState({
            showModal: 'hidden'
        });
        this.props.onDeleteSection(this.props.sectionIndex);
    }

    componentDidMount() {
        this.title.value = this.props.title;
    }

    render() {
        return (
            <div>
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

                    <div className='section-toolbar'>
                        <i className='fa fa-trash-o' onClick={this.closeBody.bind(this)}> </i>
                    </div>

                </div>

                <div className={this.state.showModal}>
                    <div className='static-modal modal-form-info'>
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>删除提示</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                您确定要删除吗？
                            </Modal.Body>

                            <Modal.Footer>
                                <Button onClick={this.cancelButton.bind(this)}>取消</Button>
                                <Button bsStyle='primary' onClick={this.confirmButton.bind(this)}>确定</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                </div>
            </div>
        );
    }
}