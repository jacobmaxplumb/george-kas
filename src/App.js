import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getTodos } from './actions/todo.actions';
import { useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App(props) {
  useEffect(() => {
    props.getTodos();
  }, [])
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default connect(null, {getTodos})(App);
