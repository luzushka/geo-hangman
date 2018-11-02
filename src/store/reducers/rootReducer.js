import { combineReducers } from 'redux';
import hangmanReducer from './hangmanReducer';
import letterInputReducer from './letterInputReducer';

export default combineReducers({
    hangman: hangmanReducer,
    letterInput: letterInputReducer
});