import React from 'react'
import PropTypes from 'prop-types'

import MuiButton from '@material-ui/core/Button'
import { Button } from 'semantic-ui-react'

import './Button.css'

const Button = props => {
  const { id, className, variant, text, disabled, iconProps } = props

  return (
    <MuiButton
      id={id}
      className={className}
      variant={variant}
      startIcon={iconProps && iconProps.position === 'start' ? iconProps.render() : undefined}
      endIcon={iconProps && iconProps.position === 'end' ? iconProps.render() : undefined}
      disabled={disabled ? true : undefined}
      disableRipple
    >
      {text}
    </MuiButton>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  iconProps: PropTypes.shape({
    // should render the MUI icon component to be rendered within the button
    render: PropTypes.func.isRequired,
    position: PropTypes.oneOf(['start', 'end']).isRequired
  })
}

export default Button
