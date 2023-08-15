import { connect } from "react-redux"

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo, index) => <div key={index}>{todo.title}</div>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: state.todo.todos
    }
}

export default connect(mapStateToProps, {})(TodoList);