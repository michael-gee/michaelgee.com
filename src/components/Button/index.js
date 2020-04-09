import React from 'react'
import PropTypes from 'prop-types'

import { Button as SUIButton } from 'semantic-ui-react'

import { MG_BUTTON_VARIANTS, MG_BUTTON_COLORS, MG_BUTTON_CUSTOM_COLORS, MG_BUTTON_SIZES } from './types'

import './Button.css'

const Button = props => {
  const btnClassNames = _configureClassNames()
  const btnProps = _configureProps()

  return <SUIButton {...btnProps} />

  function _configureClassNames() {
    if (props.disabled) return props.className ? props.className : undefined
    let classNames = `mg-custom-btn${props.className ? ' ' + props.className : ''}`
    if (props.color) return classNames
    else if (props.customColor) {
      switch (props.customColor.toLowerCase()) {
        case 'primary':
          classNames = `mg-primary-btn ${classNames}`
          break
        case 'canada':
          classNames = `mg-canada-btn ${classNames}`
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
    }

    return classNames
  }

  function _configureProps() {
    const propsObj = {
      ...props,
      className: btnClassNames,
      content: props.text,
      color: props.customColor ? undefined : props.color
    }

    if (props.variant === 'icon') {
      propsObj.circular = true
      propsObj.text = undefined
    }

    delete propsObj.text
    delete propsObj.customColor
    delete propsObj.variant

    return propsObj
  }
}

Button.defaultProps = {
  variant: MG_BUTTON_VARIANTS[0] // default
}

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(MG_BUTTON_VARIANTS),
  color: PropTypes.oneOf(MG_BUTTON_COLORS),
  customColor: PropTypes.oneOf(MG_BUTTON_CUSTOM_COLORS),
  size: PropTypes.oneOf(MG_BUTTON_SIZES),
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  'data-testid': PropTypes.string
}

export default Button
