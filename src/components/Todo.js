import React, {useState, useEffect} from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from '../redux/actions/Todo.Actions';

const Todo = (props) => {
  const listTodo = props.todoList
  const [state, setState] = useState("")
  const [updateButton, setUpdateButton] = useState(false)
  const [findEditID, setFindEditID] = useState(null)

  useEffect(() => {

  }, [listTodo])

  const handleAddOrUpdateTodo = (e) => {
    e.preventDefault();
    if(!updateButton) {
      if(state === "") {
        alert("Please input your todo list")
      } else {
        props.addTodo(state)
        setState("")
      } 
    } else {
      props.editTodo({id: findEditID, todo: state})
      console.log(findEditID, state)
      setState("")
      setUpdateButton()
    }
  }

  const handleEditTodo = (item) => {
    setFindEditID(item.id)
    setUpdateButton(true)
    setState(item.todo)
  }

  const handleDeleteTodo = (id) => {
    props.deleteTodo(id)
  }

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Input todo</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your todo list..."
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <Button 
            type="button"
            className="mt-2"
            onClick={handleAddOrUpdateTodo}
          >
            {updateButton ? 'Update' : 'Add'}
          </Button>
        </Form.Group>
      </Form>
      <h1>
        To-do list:
      </h1>
      <TodoList 
        listTodo = {listTodo}
        handleEditTodo = {handleEditTodo}
        handleDeleteTodo = {handleDeleteTodo}
      />
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
    addTodo: (Todos) => dispatch(addTodo(Todos)),
    editTodo: (item) => dispatch(editTodo(item)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
