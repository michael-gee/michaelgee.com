import React from 'react'

import Documentation from '../../HookDetails/Documentation'
import Implementation from '../../HookDetails/Implementation'
import Resources from '../../HookDetails/Resources'

const UseReducerDetails = () => {
  return (
    <section className="mg-hookDetails">
      <h1 className="mg-hookDetails-title">useReducer</h1>
      <Documentation link="https://reactjs.org/docs/hooks-reference.html#usereducer" />
      <Implementation render={() => <p>useReducer - to be continued</p>} />
      <Resources
        list={[
          {
            title: 'Ben Awad - useReducer Tutorial',
            link:
              'https://www.youtube.com/watch?v=wcRawY6aJaw&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=7'
          }
        ]}
      />
    </section>
  )
}

export default UseReducerDetails
