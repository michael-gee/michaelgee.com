import React, { Suspense } from 'react'
import PropTypes from 'prop-types'

const Loadable = props => {
  const loadableProps = { ...props }
  delete loadableProps.fallback
  delete loadableProps.render

  return <Suspense fallback={props.fallback()}>{props.render({ ...loadableProps })}</Suspense>
}

Loadable.propTypes = {
  render: PropTypes.func.isRequired,
  fallback: PropTypes.func.isRequired
}

export default Loadable
