import React, {Component} from 'react';
import {render} from 'react-dom';
import superagent from 'superagent';
import '../../style/index.less';
import PaperInfo from '../containers/PaperInfo';
import LogicPuzzle from '../containers/LogicPuzzle';
import SectionList from '../containers/SectionList';
import SectionAddButton from '../containers/SectionAddButton';
import PaperSubmit from './PaperSubmit';

import rootReducer from '../reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {withRouter} from 'react-router';

const store = createStore(
    rootReducer,
    applyMiddleware(createLogger(), thunkMiddleware)
);


export default class Main extends Component {

    componentDidMount() {

        superagent
            .get(`http://localhost:3000/api/papers/1`)
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                this.props.initPaperData(res.body);
            });
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