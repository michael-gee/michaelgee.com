import React from 'react'

import Documentation from '../../HookDetails/Documentation'
import Implementation from '../../HookDetails/Implementation'
import Resources from '../../HookDetails/Resources'
import HookImplementation from './implementation'

const UseStateDetails = () => {
  return (
    <section className="mg-hookDetails">
      <h1 className="mg-hookDetails-title">useState</h1>
      <Documentation link="https://reactjs.org/docs/hooks-reference.html#usestate" />
      <Implementation render={() => <HookImplementation />} />
      <Resources
        list={[
          {
            title: 'Ben Awad - useState Tutorial',
            link:
              'https://www.youtube.com/watch?v=9xhKH43llhU&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM'
          }
        ]}
      />
    </section>
  )
}

export default UseStateDetails
