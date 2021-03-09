export const ADD_TODO = "ADD_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const DELETE_TODO = "DELETE_TODO"

export const addTodo = (Todos) => {
  console.log(Todos)
  return {
    type: ADD_TODO,
    Todos
  }
}

export const editTodo = (id, Todos) => {
  return {
    type: EDIT_TODO,
    id,
    Todos
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}