import React from 'react'
import PropTypes from 'prop-types'

import { Modal as SUIModal } from 'semantic-ui-react'

const Modal = props => {
  return (
    <SUIModal
      open={props.isOpen}
      onClose={props.onDismiss}
      size={props.size}
      closeIcon={true}
      closeOnDimmerClick={!props.isBlocking}
    >
      {props.title && <SUIModal.Header>{props.title}</SUIModal.Header>}
      <SUIModal.Content scrolling>{props.children}</SUIModal.Content>
    </SUIModal>
  )
}

Modal.defaultProps = {
  isBlocking: false
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'fullscreen'])
}

export default Modal
