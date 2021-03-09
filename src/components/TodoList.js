import React from 'react'

const TodoList = ({listTodo, handleEditTodo, handleDeleteTodo}) => {
  return (
    <div>
      {listTodo.map((item, index) => (
        <div key={index}>
          <span>{item.todo}</span>
          <button onClick={() => handleEditTodo(item)}>Edit</button>
          <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
