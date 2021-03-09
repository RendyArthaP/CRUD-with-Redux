import { createStore } from 'redux';
import handleTodo from './reducers/Todo.Reducers';

export default createStore(handleTodo)