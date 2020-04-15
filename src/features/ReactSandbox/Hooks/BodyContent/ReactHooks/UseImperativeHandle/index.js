import React from 'react'

import Documentation from '../../HookDetails/Documentation'
import Implementation from '../../HookDetails/Implementation'
import Resources from '../../HookDetails/Resources'

const UseImperativeHandleDetails = () => {
  return (
    <section className="mg-hookDetails">
      <h1 className="mg-hookDetails-title">useImperativeHandle</h1>
      <Documentation link="https://reactjs.org/docs/hooks-reference.html#useimperativehandle" />
      <Implementation render={() => <p>useImperativeHandle - to be continued</p>} />
      <Resources list={[]} />
    </section>
  )
}

export default UseImperativeHandleDetails
