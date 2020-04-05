import React from 'react'

import { useParams } from 'react-router-dom'

const Hooks = props => {
  const { category } = useParams()

  return (
    <div>
      <h1>{category}</h1>
    </div>
  )
}

export default Hooks
