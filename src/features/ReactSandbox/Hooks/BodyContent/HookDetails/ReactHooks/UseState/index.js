import React from 'react'

import Documentation from '../../Documentation'
import Implementation from '../../Implementation'
import Resources from '../../Resources'
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
