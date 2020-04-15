import React from 'react'

import Documentation from '../../HookDetails/Documentation'
import Implementation from '../../HookDetails/Implementation'
import Resources from '../../HookDetails/Resources'

const UseContextDetails = () => {
  return (
    <section className="mg-hookDetails">
      <h1 className="mg-hookDetails-title">useContext</h1>
      <Documentation link="https://reactjs.org/docs/hooks-reference.html#usecontext" />
      <Implementation render={() => <p>useContext - to be continued</p>} />
      <Resources
        list={[
          {
            title: 'Ben Awad - useContext Tutorial',
            link:
              'https://www.youtube.com/watch?v=lhMKvyLRWo0&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=8'
          }
        ]}
      />
    </section>
  )
}

export default UseContextDetails
