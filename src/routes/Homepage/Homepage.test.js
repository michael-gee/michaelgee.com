import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Homepage from './Homepage'

import constants from '../../constants'

let mockNavigateTo

jest.mock('../../hooks/useNavigation', () => {
  return jest.fn().mockImplementation(() => {
    return { navigateTo: mockNavigateTo }
  })
})

describe('<Homepage />', () => {
  let wrapper

  beforeEach(() => {
    mockNavigateTo = jest.fn()

    wrapper = render(<Homepage />)
  })

  it('should render without error', () => {
    const { getByTestId } = wrapper

    expect(getByTestId('rs-homepage')).toBeTruthy()
  })

  it('should trigger a navigation when the "Navigate to Counter" button is clicked', () => {
    const { getByTestId } = wrapper
    const CounterNavButton = getByTestId('rs-homepage-counter-navBtn')

    expect(mockNavigateTo).not.toHaveBeenCalled()
    fireEvent.click(CounterNavButton)
    expect(mockNavigateTo).toHaveBeenCalledWith(constants.navigation.routePaths.counter)
  })

  it('should trigger a navigation when the "Navigate to Data Table" button is clicked', () => {
    const { getByTestId } = wrapper
    const DataTableNavButton = getByTestId('rs-homepage-dataTable-navBtn')

    expect(mockNavigateTo).not.toHaveBeenCalled()
    fireEvent.click(DataTableNavButton)
    expect(mockNavigateTo).toHaveBeenCalledWith(constants.navigation.routePaths.dataTable)
  })
})
