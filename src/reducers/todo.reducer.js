import { ADD_TODO_COMPLETE, SET_TODOS } from "../actions/todo.actions";

const initialTodoState = {
    todos: []
}

export const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case SET_TODOS: 
            return {...state, todos: action.payload}
        case ADD_TODO_COMPLETE:
            return {...state, todos: [...state.todos, action.payload]}
        default:
            return state;
    }
}