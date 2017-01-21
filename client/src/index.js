import React from 'react';
import ReactDom from 'react-dom';
import '../style/index.less';
import PaperInfo from './PaperInfo';
import LogicPuzzle from './LogicPuzzle';
import SectionList from './SectionList';

ReactDom.render(
    <div id='paper-editor'>
        <div className='paper-header'>新增试卷</div>
        <div id='paper-body'>
            <PaperInfo/>
            <LogicPuzzle/>
            <SectionList/>
        </div>

    </div>,
    document.getElementById('app')
);