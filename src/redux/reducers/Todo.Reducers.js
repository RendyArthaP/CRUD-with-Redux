import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO
} from '../actions/Todo.Actions.js';

const initialState = [
  {
    id: 0,
    todo: "Makan"
  }
]

const handleTodo = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      let lastID = state[state.length - 1].id;
      return [
        ...state, {
          id: lastID + 1,
          todo: action.Todos
        }
      ]
    case EDIT_TODO: 
      let editStateTodo = state.find((item) => item.id === action.item.id)
      editStateTodo.todo = action.item.todo

      return state
    case DELETE_TODO:
      let deleteStateTodo = state.filter((item) => item.id !== action.id)

      return deleteStateTodo
      
    default:
      return state
  }
}

export default handleTodo