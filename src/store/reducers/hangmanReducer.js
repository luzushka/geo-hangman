const initialState = {
    lives: 5
}

export default (state = initialState, action) => {
    switch (action.type) {
     case 'ADD_ORGANS':
      return {
          ...state,
          lives: state.lives-1
            }
     default:
      return state
    }
   }