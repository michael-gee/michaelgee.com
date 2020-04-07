import React from 'react'

import Loadable from 'components/Loadable'

const UseEffectDetails = props => {
  return <Loadable render={() => _renderComponent()} fallback={() => {}} />

  function _renderComponent() {
    return (
      <>
        <h1>useEffect</h1>
        <h4>details 123</h4>
      </>
    )
  }
}

export default UseEffectDetails
