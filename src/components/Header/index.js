import React from 'react'
import PropTypes from 'prop-types'

import IconButton from 'components/Buttons/IconButton'

import './Header.css'

const Header = props => {
  return (
    <div id="mg-header-container" data-testid="mg-header-container">
      {props.iconProps ? (
        <IconButton
          iconName={props.iconProps.icon}
          onClick={props.iconProps.onClick}
          customColor="primary"
          size="large"
          title={props.iconProps.title}
          data-testid="mg-header-iconBtn"
        />
      ) : (
        <div className="mg-header-hidden" />
      )}
      <div>{props.title}</div>
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
