import React from 'react'
import PropTypes from 'prop-types'

import { Button as SUIButton } from 'semantic-ui-react'

import { MG_BUTTON_COLORS, MG_BUTTON_CUSTOM_COLORS, MG_BUTTON_SIZES } from '../types'

import '../Button.css'

const Button = props => {
  const btnClassNames = _configureClassNames()

  return (
    <SUIButton
      id={props.id}
      className={btnClassNames}
      style={props.style}
      color={props.customColor ? undefined : props.color}
      content={props.text}
      onClick={props.onClick}
      size={props.size}
      icon={props.iconName}
      disabled={props.disabled ? true : undefined}
      title={props.title}
      data-testid={props['data-testid']}
    />
  )

  function _configureClassNames() {
    if (props.disabled) return props.className
    let classNames = `mg-custom-btn${props.className ? ' ' + props.className : ''}`
    if (props.color) return classNames

    switch (props.customColor) {
      case 'primary':
        classNames = `mg-primary-btn ${classNames}`
        break
      case 'react':
        classNames = `mg-react-btn ${classNames}`
        break
      case 'react-secondary':
        classNames = `mg-reactSecondary-btn ${classNames}`
        break
      // secondary
      // tertiary
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
  color: PropTypes.oneOf(MG_BUTTON_COLORS),
  customColor: PropTypes.oneOf(MG_BUTTON_CUSTOM_COLORS),
  size: PropTypes.oneOf(MG_BUTTON_SIZES),
  iconName: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  'data-testid': PropTypes.string
}

export default Button
