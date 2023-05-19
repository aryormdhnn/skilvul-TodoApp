import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from '../actionTypes';

const initialState = {
    todos: [{
        id: 1,
        text: 'Test Redux',
        completed: true,
    },
    {
        id: 2,
        text: 'Test Redux 2',
        completed: false,
    },
]}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const { id, text } = action.payload;
            return {
                todos: [
                    ...state.todos,
                    { text, id, completed: false }
                ]
            }

        default:
          return state;
    }
}

export default todos;