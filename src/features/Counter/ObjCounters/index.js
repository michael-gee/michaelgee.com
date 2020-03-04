import React, { useState } from 'react'
import PropTypes from 'prop-types'

import IconButton from 'components/Button/IconButton'

import { RS_BUTTON_COLORS, RS_BUTTON_SIZES } from 'components/Button/constants'

const ObjCounter = ({ counters }) => {
  // for related values that you expect to update together at the same time can be stored in an object. If the state is unrelated and updated separately, it is better to use multiple useState() constants

  // for initial state that has expensive computations (for loops, etc) can be placed inside a anonymous function so it will only render once on the initial render instead of on every render
  const [objCounters, setObjCounters] = useState(() => _setInitialCounters())
  // objects can also be destructured and properties can be individually like this:
  // const [{count1, count2, count3}, setObjCounters] = useState(() => _setInitialCounters())

  return Object.keys(objCounters).map(counter => {
    return (
      <div className="rs-objCounter-counter" key={counter}>
        <span>
          {objCounters[counter].label}: {objCounters[counter].value}
        </span>

        <div>
          <IconButton
            iconName="add"
            color={RS_BUTTON_COLORS.green}
            size={RS_BUTTON_SIZES.mini}
            onClick={() => {
              _incrementCount(counter)
            }}
          />

          <IconButton
            iconName="minus"
            color={RS_BUTTON_COLORS.red}
            size={RS_BUTTON_SIZES.mini}
            onClick={() => {
              _decrementCount(counter)
            }}
          />
        </div>
      </div>
    )
  })

  function _setInitialCounters() {
    let initialCounters = {}

    counters.map(counter => {
      return (initialCounters[counter.key] = { label: counter.label, value: counter.value })
    })

    return initialCounters
  }

  function _incrementCount(currentCounter) {
    setObjCounters(prevState => {
      return {
        ...prevState,
        [currentCounter]: { ...prevState[currentCounter], value: prevState[currentCounter].value + 1 }
      }
    })

    return
  }

  function _decrementCount(currentCounter) {
    setObjCounters(prevState => {
      return {
        ...prevState,
        [currentCounter]: { ...prevState[currentCounter], value: prevState[currentCounter].value - 1 }
      }
    })

    return
  }
}

ObjCounter.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      key: PropTypes.string.isRequired
    })
  ).isRequired
}

export default ObjCounter
