import React from 'react'

import Documentation from '../../HookDetails/Documentation'
import Implementation from '../../HookDetails/Implementation'
import Resources from '../../HookDetails/Resources'

const UseMemoDetails = () => {
  return (
    <section className="mg-hookDetails">
      <h1 className="mg-hookDetails-title">useMemo</h1>
      <Documentation link="https://reactjs.org/docs/hooks-reference.html#usememo" />
      <Implementation render={() => <p>useMemo - to be continued</p>} />
      <Resources
        list={[
          {
            title: 'Ben Awad - useMemo Tutorial',
            link:
              'https://www.youtube.com/watch?v=RkBg0gDTLU8&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=6'
          },
          {
            title: 'React Performance Optimization with React.memo()',
            link: 'https://felixgerschau.com/react-performance-react-memo'
          }
        ]}
      />
    </section>
  )
}

export default UseMemoDetails
