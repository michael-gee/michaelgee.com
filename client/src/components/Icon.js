import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill={props.color} d={props.icon} />
  </svg>
);

Icon.defaultProps = {
  color: '#fff'
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Icon;