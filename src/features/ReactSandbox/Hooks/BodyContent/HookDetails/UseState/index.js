import React from 'react'

import Loadable from 'components/Loadable'

const UseStateDetails = props => {
  return <Loadable render={() => _renderComponent()} fallback={() => {}} />

  function _renderComponent() {
    return (
      <>
        <h1>useState</h1>
        <h4>details</h4>
      </>
    )
  }
}

export default UseStateDetails
