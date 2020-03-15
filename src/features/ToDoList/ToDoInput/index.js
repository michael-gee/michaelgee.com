import React, { useState, useRef } from 'react'

import { Input } from 'semantic-ui-react'

import IconButton from 'components/Button/IconButton'

const ToDoInput = ({ onAddToDo }) => {
  const [toDoInput, setToDoInput] = useState('')

  // use useRef() here for dom access of the input field to enter a new to do item
  const toDoInputRef = useRef()

  return (
    // CSS styles from ToDoList.css
    <div id="rs-todos-input">
      <Input
        value={toDoInput}
        onChange={(ev, data) => {
          setToDoInput(data.value)
        }}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            _onEnterToDo()
          }
        }}
        placeholder="Add a to do item..."
        // now have access to the DOM element and its methods which I use to focus() the input after an item is entered into the list
        ref={toDoInputRef}
        autoFocus
      />

      <IconButton onClick={_onEnterToDo} iconName="add" size="small" customColor="primary" />
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
