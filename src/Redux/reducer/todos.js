import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from '../actionTypes';

const initialState = {
    todos: []
    }

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:{
                   const { id, text } = action.payload;
            return {
                todos: [
                    ...state.todos,
                    { text, id, completed: false }
                ]
            }
        }
     
            case TOGGLE_TODO:{
                 const { id } = action.payload;
               const todos = state.todos.map(obj => {
                return obj.id === id ? { ...obj, completed: !obj.completed } : obj
                })

            return { todos }
            }
              


        default:
          return state;
    }
}

export default todos;