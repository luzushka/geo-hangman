import {getCountries} from '../../utils/words';
export const addLetter = letter => dispatch => {
    dispatch({
     type: 'ADD_LETTER',
     payload: letter
    })
};

export const setWordAsync = word => dispatch => {
    dispatch({
     type: 'SET_WORD',
     payload: word
    })
};

export const setWord = (word = getCountries()) => async function (dispatch){
    await dispatch(setWordAsync(word));
};
