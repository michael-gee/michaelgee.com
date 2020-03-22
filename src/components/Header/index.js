import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'components/Buttons/IconButton'

import './Header.css'

const Header = props => {
  const { title, iconProps } = props

  return (
    <div id="mg-header-container" data-testid="mg-header-container">
      {iconProps ? (
        <IconButton
          iconName={iconProps.icon}
          onClick={iconProps.onClick}
          customColor="primary"
          size="large"
          title={iconProps.title}
          data-testid="mg-header-iconBtn"
        />
      ) : (
        <div className="mg-header-hidden" />
      )}
      <div>{title}</div>
      <div className="mg-header-hidden" />
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
