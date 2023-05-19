import { VISIBILITY_FILTERS } from "../Constants";

export const getTodosState = (store, visibilityFiler) =>{
    switch(visibilityFiler){
        case VISIBILITY_FILTERS.ALL:{
            return store.todos;
        }
        case VISIBILITY_FILTERS.COMPLETED:{
            return store.todos.filter(todo => todo.completed);
        }
        case VISIBILITY_FILTERS.INCOMPLETE:{
            return store.todos.filter(todo => !todo.completed);
        }
        default:{
            return store.todos;
        }
    }
};