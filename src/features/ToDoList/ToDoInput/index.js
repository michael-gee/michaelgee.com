import React, { useState, useRef } from 'react'

import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'

const ToDoInput = ({ className, onAddToDo }) => {
  const [toDoInput, setToDoInput] = useState('')

  // use useRef() here for dom access of the input field to enter a new to do item
  // now have access to the DOM element and its methods which I use to focus() the input after an item is entered into the list
  const toDoInputRef = useRef()

  return (
    <div className={className}>
      <TextField
        value={toDoInput}
        onChange={e => {
          setToDoInput(e.target.value)
        }}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            _onEnterToDo()
          }
        }}
        autoFocus
        fullWidth
        // this prop inputRef would normally be just ref for regular input HTML elements but the MUI API requests the prop inputRef instead
        inputRef={toDoInputRef}
        placeholder="Add a to-do item"
      />

      <IconButton size="small" aria-label="add">
        <AddIcon />
      </IconButton>
    </div>
  )

  function _onEnterToDo() {
    if (toDoInput.trim() !== '') {
      onAddToDo(toDoInput)
      setToDoInput('')
    }

    toDoInputRef.current.focus()
  }
}

export default ToDoInput
