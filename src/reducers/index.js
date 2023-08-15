import { todoReducer } from "./todo.reducer";

const { combineReducers } = require("redux");

export const reducer = combineReducers({
    todo: todoReducer
})