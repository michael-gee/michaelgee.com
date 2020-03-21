import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'components/Buttons/IconButton'
import { RS_BUTTON_CUSTOM_COLORS, RS_BUTTON_SIZES } from 'constants/button'

import './Header.css'

const Header = props => {
  const { title, iconProps } = props

  return (
    <div id="rs-header-container" data-testid="rs-header-container">
      {iconProps ? (
        <IconButton
          iconName={iconProps.icon}
          onClick={iconProps.onClick}
          customColor={RS_BUTTON_CUSTOM_COLORS.primary}
          size={RS_BUTTON_SIZES.large}
          title={iconProps.title}
          data-testid="rs-header-iconBtn"
        />
      ) : (
        <div className="rs-header-hidden" />
      )}
      <div>{title}</div>
      <div className="rs-header-hidden" />
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  iconProps: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string
  })
}

export default Header
