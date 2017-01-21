import React from 'react';
import ReactDom from 'react-dom';
import '../../style/index.less';
import PaperInfo from './PaperInfo';
import LogicPuzzle from './LogicPuzzle';
import SectionList from './SectionList';
import SectionAddButton from './SectionAddButton';
import PaperSubmit from './PaperSubmit';

ReactDom.render(
    <div id='paper-editor'>
        <div className='paper-header'>新增试卷</div>
        <div id='paper-body'>
            <PaperInfo/>
            <LogicPuzzle/>
            <SectionList/>
            <SectionAddButton/>
            <PaperSubmit/>
        </div>

    </div>,
    document.getElementById('app')
);