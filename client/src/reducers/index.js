import initPaperData from './initPaperData';
import editPaper from './editPaper';
import updateLogicPuzzle from './updateLogicPuzzle';

const actionMap = {
    'INIT_PAPER_DATA': initPaperData,
    'EDIT_PAPER': editPaper,
    'UPDATE_LOGIC_PUZZLE': updateLogicPuzzle
};


function rootReducer(state = {sections: []}, action) {
    const func = actionMap[action.type];
    if (!func) {
        return state;
    }
    return func(state, action.data);
}

export default rootReducer;
