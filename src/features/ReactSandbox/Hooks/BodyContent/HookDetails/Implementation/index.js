import React from 'react'
import PropTypes from 'prop-types'

const HookImplementation = props => {
  return (
    // CSS FROM BodyContent.css
    <article className="mg-hookDetails-article">
      <h3>Implementation</h3>

      {props.render()}
    </article>
  )
}

HookImplementation.propTypes = {
  render: PropTypes.func.isRequired
}

export default HookImplementation
