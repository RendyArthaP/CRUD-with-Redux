export const ADD_TODO = "ADD_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const DELETE_TODO = "DELETE_TODO"

export const addTodo = (Todos) => {
  return {
    type: ADD_TODO,
    Todos
  }
}

export const editTodo = (item) => {
  console.log(item)
  return {
    type: EDIT_TODO,
    item
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}