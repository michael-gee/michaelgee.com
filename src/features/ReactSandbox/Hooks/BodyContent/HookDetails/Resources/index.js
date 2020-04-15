import React from 'react'
import PropTypes from 'prop-types'

const HookResources = props => {
  return (
    <article className="mg-hookDetails-article">
      <h3>Additional Resources</h3>

      <ul>
        {props.list.map(item => {
          return (
            <li>
              <a href={item.link} target="_blank">
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

HookResources.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
}

export default HookResources
