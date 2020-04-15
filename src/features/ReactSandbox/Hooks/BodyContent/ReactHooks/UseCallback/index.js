import React from 'react'

import Documentation from '../../HookDetails/Documentation'
import Implementation from '../../HookDetails/Implementation'
import Resources from '../../HookDetails/Resources'

const UseCallbackDetails = () => {
  return (
    <section className="mg-hookDetails">
      <h1 className="mg-hookDetails-title">useCallback</h1>
      <Documentation link="https://reactjs.org/docs/hooks-reference.html#usecallback" />
      <Implementation render={() => <p>useCallback- to be continued</p>} />
      <Resources
        list={[
          {
            title: 'Ben Awad - useCallback Tutorial',
            link:
              'https://www.youtube.com/watch?v=-Ls48dd-vJE&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=5'
          }
        ]}
      />
    </section>
  )
}

export default UseCallbackDetails
