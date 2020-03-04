import React from 'react'
import PropTypes from 'prop-types'

import { Button as SUIButton } from 'semantic-ui-react'

import './Button.css'

const Button = props => {
  const { text, onClick, variant, size, iconName, disabled, id, className, style, title } = props
  const btnClassNames = _configureClassNames()

  return (
    <SUIButton
      id={id}
      className={btnClassNames}
      style={style}
      content={text}
      onClick={onClick}
      size={size}
      icon={iconName}
      disabled={disabled ? true : undefined}
      title={title}
    />
  )

  function _configureClassNames() {
    if (disabled) return className

    let classNames = `rs-custom-btn${className ? ' ' + className : ''}`

    switch (variant) {
      case 'primary':
        classNames = `rs-primary-btn ${classNames}`
        break
      case 'secondary':
        classNames = `rs-secondary-btn ${classNames}`
        break
      case 'tertiary':
        classNames = `rs-tertiary-btn ${classNames}`
        break

      default:
        break
    }

    return classNames
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
  iconName: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string
}

export default Button
