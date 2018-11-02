import {getAllIndexes} from '../../utils/letters';


const initialState = {
    originalWord: 'YONATAN MELEH',
    editableWord: '_______ _____',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LETTER':
            let indexes = getAllIndexes(Array.from(state.originalWord), action.payload);
            let editedWord = state.editableWord.split('');
            indexes.forEach(index=>{
                editedWord[index]=action.payload;
            });
            return {
                ...state,
                editableWord: editedWord.join('')
            };
        case 'SET_WORD':
            const {payload} = action;
            return {
                ...state,
                originalWord: payload.toUpperCase(),
                editableWord: payload.replace(/[A-Za-z0-9]/g, '_')
            };
    default:
        return state;
    }
};