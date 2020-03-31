import React from 'react'
import PropTypes from 'prop-types'

import { Modal } from 'semantic-ui-react'
import Button from '../Buttons/Button'

import './Dialog.css'

const Dialog = props => {
  const subText = _configureSubText()

  return (
    <Modal
      open={props.isOpen}
      onClose={props.onDismiss}
      size="mini"
      dimmer="inverted"
      className="mg-dialog"
      closeIcon={true}
      closeOnDimmerClick={false}
    >
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content>{subText}</Modal.Content>
      <Modal.Actions>
        <Button text={props.cancelButtonText} onClick={props.onDismiss} color="red" />
        <Button text={props.confirmButtonText} onClick={props.onConfirm} color="green" />
      </Modal.Actions>
    </Modal>
  )

  function _configureSubText() {
    if (props.subText) return props.subText
    if (props.renderSubText) return props.renderSubText()

    return 'Are you sure you would like to proceed?'
  }
}

Dialog.defaultProps = {
  confirmButtonText: 'Confirm',
  cancelButtonText: 'Cancel'
}

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  title: PropTypes.string,
  subText: PropTypes.string,
  renderSubText: PropTypes.func
}

export default Dialog
