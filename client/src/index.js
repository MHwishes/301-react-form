import React from 'react';
import ReactDom from 'react-dom';
import '../style/index.less';
import PaperInfo from './PaperInfo';
import LogicPuzzle from './LogicPuzzle';

ReactDom.render(
    <div id='paper-editor'>
        <div className='paper-header'>新增试卷</div>
        <div id='paper-body'>
            <PaperInfo/>
            <LogicPuzzle/>

        </div>

    </div>,
    document.getElementById('app')
);