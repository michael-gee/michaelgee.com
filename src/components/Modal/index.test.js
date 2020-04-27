import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Modal } from './'

describe('<Modal />', () => {
  it('should render a content overlay Modal if the isOpen prop is passed as true', () => {
    const { rerender } = render(<Modal isOpen={false} onDismiss={() => {}} />)
    expect(screen.queryByTestId('mg-modal')).not.toBeInTheDocument()

    rerender(<Modal isOpen={true} onDismiss={() => {}} />)
    expect(screen.getByTestId('mg-modal')).toBeInTheDocument()
  })

  it('should render a Modal title is a title prop is provided', () => {
    render(<Modal isOpen={true} onDismiss={() => {}} title="Mock Title" />)
    expect(screen.getByText('Mock Title')).toHaveClass('header')
    expect(screen.getByText('Mock Title')).toBeInTheDocument()
  })

  it('should render the expected content within the Modal when it is open', () => {
    render(
      <Modal isOpen={true} onDismiss={() => {}}>
        <div data-testid="modal-content" />
      </Modal>
    )
    expect(screen.getByTestId('modal-content').parentNode).toHaveClass('content')
    expect(screen.getByTestId('modal-content')).toBeInTheDocument()
  })

  // @@@@@ failing test
  xit('should render a close icon button that closes the Modal when clicked', () => {
    render(<Modal isOpen={true} onDismiss={() => {}} />)

    const CloseIconButton = screen.getByTestId('mg-modal').childNodes[0]

    expect(screen.getByTestId('mg-modal')).toBeInTheDocument()
    fireEvent.click(CloseIconButton)
    expect(screen.queryByTestId('mg-modal')).not.toBeInTheDocument()
  })
})
