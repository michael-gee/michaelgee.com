import React from 'react'
import PropTypes from 'prop-types'

const HookDocumentation = props => {
  return (
    // CSS FROM BodyContent.css
    <article className="mg-hookDetails-article">
      <h3>Documentation</h3>

      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.link}
      </a>
    </article>
  )
}

HookDocumentation.propTypes = {
  link: PropTypes.string.isRequired
}

export default HookDocumentation
