import axios from "axios";

export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO_COMPLETE = 'ADD_TODO_COMPLETE';

export const getTodos = () => dispatch => {
    axios.get('http://localhost:8080/todos').then(res => {
        dispatch(setTodos(res.data));
    })
}

export const addTodo = (todo) => dispatch => {
    axios.post('http://localhost:8080/todos', todo).then(() => {
        dispatch(addTodoComplete(todo));
    })
}

export const addTodoComplete = (todo) => {
    return {type: ADD_TODO_COMPLETE, payload: todo}
}

export const setTodos = (todos) => {
    return {type: SET_TODOS, payload: todos}
}