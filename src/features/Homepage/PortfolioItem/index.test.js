import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import PortfolioItem from '.'

let mockNavigateTo

jest.mock('hooks/useNavigation', () => {
  return jest.fn().mockImplementation(() => {
    return { navigateTo: mockNavigateTo }
  })
})

describe('<PortfolioItem />', () => {
  let wrapper, mockTitle, mockPathname, mockDate, mockDescription

  beforeEach(() => {
    mockTitle = 'Mock Route'
    mockPathname = '/mock-route'
    mockDate = 'May 22nd, 2019'
    mockDescription = 'Mock Description'
    mockNavigateTo = jest.fn()

    wrapper = render(
      <PortfolioItem title={mockTitle} pathname={mockPathname} date={mockDate} description={mockDescription} />
    )
  })

  it('should render the expected card content & info passed from props', () => {
    const { getByText, getByTestId } = wrapper
    expect(getByText(mockTitle)).toBeInTheDocument()
    expect(getByText(mockDate)).toBeInTheDocument()
    // Description is displayed on hover of the info icon
    expect(getByTestId('desc-icon')).toBeInTheDocument()
    expect(getByTestId('item-navBtn')).toBeInTheDocument()
  })

  it('should navigate to the expected route when the nav icon button is clicked', () => {
    const { getByTestId } = wrapper
    expect(mockNavigateTo).not.toHaveBeenCalled()
    fireEvent.click(getByTestId('item-navBtn'))
    expect(mockNavigateTo).toHaveBeenCalledWith(mockPathname)
  })
})
