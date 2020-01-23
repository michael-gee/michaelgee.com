import React from 'react'

import SimpleCounter from './SimpleCounter'
import ObjCounter from './ObjCounter'

import { useStyles } from './styles'

const Counter = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.countContainer}>
        <SimpleCounter />
      </div>

      <div className={classes.countContainer}>
        <ObjCounter
          counters={[
            { label: 'Counter 1', value: 0, key: 'count1' },
            { label: 'Counter 2', value: 10, key: 'count2' },
            { label: 'Counter 3', value: 20, key: 'count3' }
          ]}
        />
      </div>
    </div>
  )
}

export default Counter

// side note: (memory leaks) memory leaks happen when component state updates happen in a component that is unmounted: for example when this.setState is in a callback or after an async method in mount or update which does not complete execution. this will result in the setState being kept in memory and can cause problems in the application.
