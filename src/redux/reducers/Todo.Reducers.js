import {
  ADD_TODO,
  // EDIT_TODO,
  // DELETE_TODO
} from '../actions/Todo.Actions.js';

const initialState = [
  {todo: "Makan"}
]

const handleTodo = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state, {
          todo: action.Todos
        }
      ]
    // case EDIT_TODO: 
    //   return {

    //   }
    default:
      return state
  }
}

export default handleTodo