import React from 'react'
import PropTypes from 'prop-types'

const HookDocumentation = props => {
  return (
    <article className="mg-hookDetails-article">
      <h3>Documentation</h3>

      <a href={props.link} target="_blank">
        {props.link}
      </a>
    </article>
  )
}

HookDocumentation.propTypes = {
  link: PropTypes.string.isRequired
}

export default HookDocumentation
