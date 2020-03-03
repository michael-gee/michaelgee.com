import React from 'react'
import PropTypes from 'prop-types'

import { Button as SUIButton } from 'semantic-ui-react'

import './Button.css'

const Button = props => {
  const { id, className, text, onClick, variant, disabled, iconProps } = props
  const btnClassNames = _configureClassNames()

  return (
    <SUIButton id={id} className={btnClassNames} onClick={onClick} disabled={disabled ? true : undefined}>
      {text}
    </SUIButton>
  )

  function _configureClassNames() {
    if (disabled) return className

    let classNames = `rs-custom-btn ${className}`

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
    }

    return classNames
  }
}

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
  // iconProps: PropTypes.shape({
  //   // should render the MUI icon component to be rendered within the button
  //   render: PropTypes.func.isRequired,
  //   position: PropTypes.oneOf(['start', 'end']).isRequired
  // })
}

export default Button
