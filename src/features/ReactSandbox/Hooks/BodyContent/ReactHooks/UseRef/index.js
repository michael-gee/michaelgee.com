import React from 'react'

import Documentation from '../../HookDetails/Documentation'
import Implementation from '../../HookDetails/Implementation'
import Resources from '../../HookDetails/Resources'

const UseRefDetails = () => {
  return (
    <section className="mg-hookDetails">
      <h1 className="mg-hookDetails-title">useRef</h1>
      <Documentation link="https://reactjs.org/docs/hooks-reference.html#useref" />
      <Implementation render={() => <p>useRef - to be continued</p>} />
      <Resources
        list={[
          {
            title: 'Ben Awad - useRef Tutorial',
            link:
              'https://www.youtube.com/watch?v=W6AJ-gRupCs&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=3'
          }
        ]}
      />
    </section>
  )
}

export default UseRefDetails
