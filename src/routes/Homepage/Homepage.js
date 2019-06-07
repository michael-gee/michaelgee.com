import React from 'react'

import Button from '@material-ui/core/Button'

const Homepage = props => {
  return (
    <div data-test="rs-homepage">
      <h1>Homepage</h1>

      <Button onClick={() => _navigateToCounter(props.history)}>Navigate to Counter</Button>
    </div>
  )
}

function _navigateToCounter(history) {
  history.replace('/counter')
}

export default Homepage
