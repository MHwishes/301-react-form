import initPaperData from './initPaperData';
import editPaper from './editPaper';
const actionMap = {
    'INIT_PAPER_DATA': initPaperData,
    'EDIT_PAPER': editPaper
};


function rootReducer(state = {sections: []}, action) {
    const func = actionMap[action.type];
    if (!func) {
        return state;
    }
    return func(state, action.data);
}

export default rootReducer;
