import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Dialog } from './'

describe('<Dialog />', () => {
  it('should render a confirmation Dialog if the isOpen prop is passed as true', () => {
    const { rerender } = render(<Dialog isOpen={false} onConfirm={() => {}} onDismiss={() => {}} />)
    expect(screen.queryByTestId('mg-dialog')).not.toBeInTheDocument()

    rerender(<Dialog isOpen={true} onConfirm={() => {}} onDismiss={() => {}} />)
    expect(screen.getByTestId('mg-dialog')).toBeInTheDocument()
  })

  it('should render a Dialog title is a title prop is provided', () => {
    render(<Dialog isOpen={true} onConfirm={() => {}} onDismiss={() => {}} title="Mock Title" />)
    expect(screen.getByText('Mock Title')).toHaveClass('header')
    expect(screen.getByText('Mock Title')).toBeInTheDocument()
  })

  it('should render a default subtext confirmation message if NO subText/renderSubText props are passed', () => {
    render(<Dialog isOpen={true} onConfirm={() => {}} onDismiss={() => {}} />)
    expect(screen.getByText('Are you sure you would like to proceed?')).toHaveClass('content')
    expect(screen.getByText('Are you sure you would like to proceed?')).toBeInTheDocument()
  })

  it('should render a subtext message as text if a subText prop is passed', () => {
    render(
      <Dialog isOpen={true} onConfirm={() => {}} onDismiss={() => {}} subText="Mock Subtext" />
    )

    expect(screen.getByText('Mock Subtext')).toHaveClass('content')
    expect(screen.getByText('Mock Subtext')).toBeInTheDocument()
  })

  it('should render a subtext message as html if a renderSubText prop is passed', () => {
    render(
      <Dialog
        isOpen={true}
        onConfirm={() => {}}
        onDismiss={() => {}}
        renderSubText={() => (
          <div data-testid="mock-subtext">
            <strong>mock subtext</strong>
          </div>
        )}
      />
    )
    expect(screen.getByTestId('mock-subtext').parentNode).toHaveClass('content')
    expect(screen.getByTestId('mock-subtext')).toBeInTheDocument()
  })

  it('should render Confirm/Cancel buttons by default that trigger the required onConfirm/onDismiss prop functions', () => {
    const mockOnConfirm = jest.fn()
    const mockOnDismiss = jest.fn()

    const { rerender } = render(
      <Dialog isOpen={true} onConfirm={mockOnConfirm} onDismiss={mockOnDismiss} />
    )

    expect(screen.getByText('Confirm')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()

    // text of the buttons can be changed through specified props
    rerender(
      <Dialog
        isOpen={true}
        onConfirm={mockOnConfirm}
        onDismiss={mockOnDismiss}
        confirmButtonText="Testing Confirm Text"
        cancelButtonText="Test Cancel Text"
      />
    )

    expect(screen.queryByText('Confirm')).not.toBeInTheDocument()
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument()
    expect(screen.getByText('Testing Confirm Text')).toBeInTheDocument()
    expect(screen.getByText('Test Cancel Text')).toBeInTheDocument()

    expect(mockOnConfirm).not.toHaveBeenCalled()
    const ConfirmButton = screen.getByText('Testing Confirm Text')
    fireEvent.click(ConfirmButton)
    expect(mockOnConfirm).toHaveBeenCalled()

    expect(mockOnDismiss).not.toHaveBeenCalled()
    const CancelButton = screen.getByText('Test Cancel Text')
    fireEvent.click(CancelButton)
    expect(mockOnDismiss).toHaveBeenCalled()
  })
})
