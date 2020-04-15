import React from 'react'

import Documentation from '../../HookDetails/Documentation'
import Implementation from '../../HookDetails/Implementation'
import Resources from '../../HookDetails/Resources'

const UseLayoutEffectDetails = () => {
  return (
    <section className="mg-hookDetails">
      <h1 className="mg-hookDetails-title">useLayoutEffect</h1>
      <Documentation link="https://reactjs.org/docs/hooks-reference.html#uselayouteffect" />
      <Implementation render={() => <p>useLayoutEffect - to be continued</p>} />
      <Resources
        list={[
          {
            title: 'Ben Awad - useLayoutEffect Tutorial',
            link:
              'https://www.youtube.com/watch?v=ommC6fS1SZg&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=4'
          }
        ]}
      />
    </section>
  )
}

export default UseLayoutEffectDetails
