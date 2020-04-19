import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import Button from './'

describe('<Button />', () => {
  it('should render the type of button dependent on a variant prop being passed', () => {
    const { rerender } = render(<Button />)
    expect(screen.getByTestId('default-btn')).toBeInTheDocument()

    rerender(<Button variant="icon" />)
    expect(screen.queryByTestId('default-btn')).not.toBeInTheDocument()
    expect(screen.getByTestId('icon-btn')).toBeInTheDocument()
  })

  it('should render as disabled if a disabled prop is passed as true', () => {
    const { rerender } = render(<Button />)
    expect(screen.getByTestId('default-btn')).not.toHaveAttribute('disabled')

    rerender(<Button disabled />)
    expect(screen.getByTestId('default-btn')).toHaveAttribute('disabled')
  })

  it('should NOT display any text if the button variant is an icon button', () => {
    const { rerender } = render(<Button text="Mock Text" />)
    expect(screen.getByText('Mock Text')).toBeInTheDocument()

    rerender(<Button text="Mock Text" variant="icon" />)
    expect(screen.queryByText('Mock Text')).not.toBeInTheDocument()
    expect(screen.getByTestId('icon-btn')).toBeInTheDocument()
  })

  it('should execute the expected functionality passed from the onClick prop when the button is clicked', () => {
    const mockOnClick = jest.fn()
    render(<Button text="Text Test" onClick={mockOnClick} />)
    const MockButton = screen.getByTestId('default-btn')

    expect(mockOnClick).not.toHaveBeenCalled()
    fireEvent.click(MockButton)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
