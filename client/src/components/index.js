import React, {Component} from 'react';
import {render} from 'react-dom';
import '../../style/index.less';
import PaperInfo from '../containers/PaperInfo';
import LogicPuzzle from './LogicPuzzle';
import SectionList from './SectionList';
import SectionAddButton from './SectionAddButton';
import PaperSubmit from './PaperSubmit';

import rootReducer from '../reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import paperData from '../rawData/paperData';
import {withRouter} from 'react-router';

const store = createStore(
    rootReducer,
    applyMiddleware(createLogger(), thunkMiddleware)
);


export default class Main extends Component {
    componentDidMount() {
        this.props.initPaperData(paperData);
    }

    render() {
        return (
            <div id='paper-editor'>
                <div className='paper-header'>新增试卷</div>
                <div id='paper-body'>
                    <PaperInfo/>
                    <LogicPuzzle/>
                    <SectionList/>
                    <SectionAddButton/>
                    <PaperSubmit/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch)=> {
    return {
        initPaperData: (data) => {
            dispatch({type: 'INIT_PAPER_DATA', data});
        }
    };
};
let RootApp = connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));

render(
    <Provider store={store}>
        <RootApp/>
    </Provider>,
    document.getElementById('app')
);