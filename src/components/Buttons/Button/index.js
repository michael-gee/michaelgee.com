import React from 'react'
import PropTypes from 'prop-types'

import { Button as SUIButton } from 'semantic-ui-react'

import { RS_BUTTON_COLOR_TYPES, RS_BUTTON_CUSTOM_COLOR_TYPES, RS_BUTTON_SIZE_TYPES } from 'constants/button'

import '../Button.css'

const Button = props => {
  const { text, onClick, color, customColor, size, iconName, disabled, id, className, style, title } = props
  const btnClassNames = _configureClassNames()

  return (
    <SUIButton
      id={id}
      className={btnClassNames}
      style={style}
      color={customColor ? undefined : color}
      content={text}
      onClick={onClick}
      size={size}
      icon={iconName}
      disabled={disabled ? true : undefined}
      title={title}
      data-testid={props['data-testid']}
    />
  )

  function _configureClassNames() {
    if (disabled) return className
    let classNames = `rs-custom-btn${className ? ' ' + className : ''}`
    if (color) return classNames

    switch (customColor) {
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
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(RS_BUTTON_COLOR_TYPES),
  customColor: PropTypes.oneOf(RS_BUTTON_CUSTOM_COLOR_TYPES),
  size: PropTypes.oneOf(RS_BUTTON_SIZE_TYPES),
  iconName: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  ['data-testid']: PropTypes.string
}

export default Button
