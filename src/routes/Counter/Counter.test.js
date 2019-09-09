import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Counter from './Counter'

describe('<Counter />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Counter />)
  })

  it('should render without error', () => {
    const { getByTestId } = wrapper
    expect(getByTestId('rs-counter-container')).toBeTruthy()
  })

  it('should set and display the initial count state as 0', () => {
    const { getByTestId } = wrapper
    expect(getByTestId('rs-counter-count').innerHTML).toContain(0)
  })

  it('should add 1 to the current count state when the "Increment" button is clicked', () => {
    const { getByTestId } = wrapper
    const IncrementButton = getByTestId('rs-counter-incrementBtn')

    expect(getByTestId('rs-counter-count').innerHTML).toContain(0)
    fireEvent.click(IncrementButton)
    expect(getByTestId('rs-counter-count').innerHTML).toContain(1)
  })

  it('should subtract 1 from the current count state when the "Decrement" button is clicked', () => {
    const { getByTestId } = wrapper
    const DecrementButton = getByTestId('rs-counter-decrementBtn')

    expect(getByTestId('rs-counter-count').innerHTML).toContain(0)
    fireEvent.click(DecrementButton)
    expect(getByTestId('rs-counter-count').innerHTML).toContain(-1)
  })
})
