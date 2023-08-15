import { useState } from "react";
import { connect } from "react-redux"
import { addTodo } from "../actions/todo.actions";

const TodoForm = (props) => {
    const [title, setTitle] = useState('');

    const addTodoItem = () => {
        const todoItem = {
            title: title
        }
        props.addTodo(todoItem);
        setTitle('');
    }

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={addTodoItem}>Add</button>
        </div>
    )
}

export default connect(null, {addTodo})(TodoForm);