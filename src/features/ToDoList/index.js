import React, { useState, useRef } from 'react'

import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'

import ToDoItem from './ToDoItem'

import { v4 } from 'uuid'

import { useStyles } from './styles'

const ToDoList = props => {
  const [toDos, setToDos] = useState([])
  const [toDoInput, setToDoInput] = useState('')
  // use useRef() here for dom access of the input field to enter a new to do item
  // now have access to the DOM element and its methods which I use to focus() the input after an item is entered into the list
  const toDoInputRef = useRef()

  // @@@@@@ STILL NEED TO IMPLEMENT USEREF() MEMORY LEAK USE CASE https://www.youtube.com/watch?v=W6AJ-gRupCs&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=3 5:36
  // @@@@@@ mock data link - http://jsonplaceholder.typicode.com/

  const classes = useStyles()

  console.log('render')

  return (
    <div className={classes.container}>
      {toDos.length > 0 ? (
        <ul>
          {toDos.map(todo => {
            return <ToDoItem value={todo.value} key={todo.id} />
          })}
        </ul>
      ) : (
        <div className={classes.noToDos}>There are currently no to-dos.</div>
      )}

      <div>
        <TextField
          value={toDoInput}
          onChange={e => setToDoInput(e.target.value)}
          // this prop inputRef would normally be just ref (in the input example below) but the MUI API requests the prop inputRef instead
          inputRef={toDoInputRef}
          placeholder="Add a to-do item"
        />

        {/* <input
          value={toDoInput}
          onChange={e => setToDoInput(e.target.value)}
          ref={toDoInputRef}
          placeholder="Add a to-do item"
        /> */}

        <IconButton
          onClick={() => {
            setToDos([...toDos, { id: v4(), value: toDoInput }])
            setToDoInput('')
            toDoInputRef.current.focus()
          }}
          size="small"
          aria-label="add"
        >
          <AddIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default ToDoList
