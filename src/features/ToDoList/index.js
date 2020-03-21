import React, { useState, useEffect } from 'react'

import ToDoItem from './ToDoItem'
import ToDoInput from './ToDoInput'

import MockDataApi from 'services/MockDataApi'
import useApi from 'hooks/useApi'

import { v4 } from 'uuid'

import './ToDoList.css'

const ToDoList = () => {
  const [toDos, setToDos] = useState([])

  const { isLoading, data } = useApi(_fetchMockToDoItems, {
    onMount: true,
    initialData: null
  })

  useEffect(() => {
    if (!isLoading && data) {
      const mappedToDos = data.map(item => ({ id: v4(), value: item.title }))
      setToDos(mappedToDos)
    }
  }, [isLoading, data])

  return (
    <div id="mg-todo-list">
      {isLoading && <div>Loading...</div>}

      {toDos.length > 0 ? (
        <ul>
          {toDos.map(todo => {
            return <ToDoItem value={todo.value} key={todo.id} />
          })}
        </ul>
      ) : (
        <div id="mg-todo-noData">There are currently no to-dos.</div>
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
