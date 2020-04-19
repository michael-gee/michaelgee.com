import React from 'react'
import { render, screen } from '@testing-library/react'

import Dialog from './'

describe('<Dialog />', () => {
  it('should render a confirmation Dialog if the isOpen prop is passed as true', () => {
    const { rerender } = render(<Dialog isOpen={false} onConfirm={() => {}} onDismiss={() => {}} />)
    expect(screen.queryByTestId('mg-dialog')).not.toBeInTheDocument()

    rerender(<Dialog isOpen={true} onConfirm={() => {}} onDismiss={() => {}} />)
    expect(screen.getByTestId('mg-dialog')).toBeInTheDocument()
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
})
