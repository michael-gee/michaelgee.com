import React from 'react'
import PropTypes from 'prop-types'

import { Button as SUIButton } from 'semantic-ui-react'

import { MG_BUTTON_COLORS, MG_BUTTON_CUSTOM_COLORS, MG_BUTTON_SIZES } from '../types'

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
    let classNames = `mg-custom-btn${className ? ' ' + className : ''}`
    if (color) return classNames

    switch (customColor) {
      case 'primary':
        classNames = `mg-primary-btn ${classNames}`
        break
      case 'react':
        classNames = `mg-react-btn ${classNames}`
        break
      // secondary
      // tertiary
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
  color: PropTypes.oneOf(MG_BUTTON_COLORS),
  customColor: PropTypes.oneOf(MG_BUTTON_CUSTOM_COLORS),
  size: PropTypes.oneOf(MG_BUTTON_SIZES),
  disabled: PropTypes.bool,
  title: PropTypes.string,
  'data-testid': PropTypes.string
}

export default IconButton
