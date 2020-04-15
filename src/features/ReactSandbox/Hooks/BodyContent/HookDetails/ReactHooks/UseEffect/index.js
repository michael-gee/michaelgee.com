import React from 'react'

import Documentation from '../../Documentation'
import Implementation from '../../Implementation'
import Resources from '../../Resources'

const UseStateDetails = () => {
  return (
    <section className="mg-hookDetails">
      <h1 className="mg-hookDetails-title">useEffect</h1>
      <Documentation link="https://reactjs.org/docs/hooks-reference.html#useeffect" />
      <Implementation render={() => <div>testing 123</div>} />
      <Resources
        list={[
          {
            title: 'Ben Awad - useEffect Tutorial',
            link:
              'https://www.youtube.com/watch?v=j1ZRyw7OtZs&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=2'
          }
        ]}
      />
    </section>
  )
}

export default UseStateDetails
