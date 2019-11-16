import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Counter from './'

describe('<Counter />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Counter />)
  })

  it('should render without error', () => {
    const { queryByTestId } = wrapper
    expect(queryByTestId('rs-counter-container')).toBeTruthy()
  })

  it('should set and display the initial count state as 0', () => {
    const { queryByTestId } = wrapper
    expect(queryByTestId('rs-counter-count').innerHTML).toContain(0)
  })

  it('should change the browser title when <Counter /> is mounted and unmounted', () => {
    const { unmount } = wrapper
    expect(document.title).toEqual('You clicked 0 times')
    unmount()
    expect(document.title).toEqual('React Sandbox')
  })

  describe('when the "Increment button is clicked"', () => {
    it('should add 1 to the current count state and update the browser title', () => {
      const { queryByTestId } = wrapper
      const IncrementButton = queryByTestId('rs-counter-incrementBtn')

      expect(queryByTestId('rs-counter-count').innerHTML).toContain(0)
      expect(document.title).toEqual('You clicked 0 times')
      fireEvent.click(IncrementButton)
      expect(queryByTestId('rs-counter-count').innerHTML).toContain(1)
      expect(document.title).toEqual('You clicked 1 times')
    })
  })

  describe('when the "Decrement" button is clicked', () => {
    it('should subtract 1 from the current count state and update the browser title', () => {
      const { queryByTestId } = wrapper
      const DecrementButton = queryByTestId('rs-counter-decrementBtn')

      expect(queryByTestId('rs-counter-count').innerHTML).toContain(0)
      expect(document.title).toEqual('You clicked 0 times')
      fireEvent.click(DecrementButton)
      expect(queryByTestId('rs-counter-count').innerHTML).toContain(-1)
      expect(document.title).toEqual('You clicked -1 times')
    })
  })
})
