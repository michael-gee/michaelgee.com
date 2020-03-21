import React from 'react'
import PropTypes from 'prop-types'

import { Button as SUIButton } from 'semantic-ui-react'

import { RS_BUTTON_COLOR_TYPES, RS_BUTTON_CUSTOM_COLOR_TYPES, RS_BUTTON_SIZE_TYPES } from 'constants/button'

import '../Button.css'

const IconButton = props => {
  const { iconName, onClick, color, customColor, size, disabled, id, className, style, title } = props
  const iconBtnClassNames = _configureClassNames()

  return (
    <SUIButton
      id={id}
      className={iconBtnClassNames}
      style={style}
      color={customColor ? undefined : color}
      icon={iconName}
      onClick={onClick}
      circular
      size={size}
      disabled={disabled ? true : undefined}
      title={title}
      data-testid={props['data-testid']}
    >
      {props.children}
    </SUIButton>
  )

  function _configureClassNames() {
    // styles from Button.css
    if (disabled) return className // props.className
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

IconButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  iconName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(RS_BUTTON_COLOR_TYPES),
  customColor: PropTypes.oneOf(RS_BUTTON_CUSTOM_COLOR_TYPES),
  size: PropTypes.oneOf(RS_BUTTON_SIZE_TYPES),
  disabled: PropTypes.bool,
  title: PropTypes.string,
  'data-testid': PropTypes.string
}

export default IconButton
