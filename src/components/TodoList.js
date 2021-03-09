import React from 'react'

const TodoList = ({listTodo}) => {
  return (
    <div>
      {listTodo.map((item, index) => (
        <div key={index}>
          <span>{item.todo}</span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
