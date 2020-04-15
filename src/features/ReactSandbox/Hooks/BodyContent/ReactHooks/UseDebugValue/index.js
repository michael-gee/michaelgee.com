import React from 'react'

import Documentation from '../../HookDetails/Documentation'
import Implementation from '../../HookDetails/Implementation'
import Resources from '../../HookDetails/Resources'

const UseDebugValueDetails = () => {
  return (
    <section className="mg-hookDetails">
      <h1 className="mg-hookDetails-title">useDebugValue</h1>
      <Documentation link="https://reactjs.org/docs/hooks-reference.html#usedebugvalue" />
      <Implementation render={() => <p>useDebugValue - to be continued</p>} />
      <Resources list={[]} />
    </section>
  )
}

export default UseDebugValueDetails
