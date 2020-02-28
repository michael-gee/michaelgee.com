import React, { useState } from 'react'

import ToDoItem from './ToDoItem'
import ToDoInput from './ToDoInput'

import MockDataApi from 'services/MockDataApi'
import useApi from 'hooks/useApi'

import { v4 } from 'uuid'

import './ToDoList.css'

const ToDoList = () => {
  const [toDos, setToDos] = useState([])

  const { isLoading, data, hasError } = useApi(_fetchMockToDoItems, {
    onMount: true,
    initialData: null
  })

  return (
    <div id="rs-todo-list">
      {toDos.length > 0 ? (
        <ul>
          {toDos.map(todo => {
            return <ToDoItem value={todo.value} key={todo.id} />
          })}
        </ul>
      ) : (
        <div id="rs-todo-noData">There are currently no to-dos.</div>
      )}

      <ToDoInput onAddToDo={_onAddToDo} />
    </div>
  )

  async function _fetchMockToDoItems() {
    const data = await MockDataApi.fetchMockToDoItems()
    return data
  }

  function _onAddToDo(todo) {
    setToDos([...toDos, { id: v4(), value: todo }])
  }
}

export default ToDoList
