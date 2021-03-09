import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/Todo.Actions';

const Todo = (props) => {
  const listTodo = props.todoList

  const handleAddTodo = (e) => {
    e.preventDefault();
    props.addTodo(e.target.textTodo.value)
  }

  return (
    <Container>
      <Form onSubmit={handleAddTodo}>
        <Form.Group>
          <Form.Label>Input todo</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your todo list..."
            name="textTodo"
          />
          <Button 
            type="submit"
            className="mt-2"
          >
            Add
          </Button>
        </Form.Group>
      </Form>
      <h1>
        To-do list:
      </h1>
      <TodoList listTodo = {listTodo}/>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    todoList: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (Todos) => dispatch(addTodo(Todos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
