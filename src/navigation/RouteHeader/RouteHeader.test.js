import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import RouteHeader from './RouteHeader'

import constants from '../../constants'

jest.mock('../../hooks/useAppCommand', () => {
  return jest.fn().mockImplementation(() => {
    return {}
  })
})

describe('<RouteHeader />', () => {
  let wrapper, mockCurrentRoute

  beforeEach(() => {
    mockCurrentRoute = '/simple-hooks-counter'

    wrapper = render(<RouteHeader currentRoute={mockCurrentRoute} />)
  })

  it('should render without error', () => {
    const { queryByTestId } = wrapper

    expect(queryByTestId('rs-header-container')).toBeTruthy()
  })

  it('should NOT render the home navigation icon button when the current route is the homepage', () => {
    // homepage is NOT the currentRoute by default: currentRoute = /simple/hooks/counter
    const { queryByTestId, rerender } = wrapper
    rerender(<RouteHeader currentRoute={constants.navigation.routePaths.homepage} />)

    expect(queryByTestId('rs-header-iconBtn')).toBeNull()
  })

  it('should render the home navigation icon button when the current route NOT is the homepage', () => {
    // homepage is NOT the currentRoute by default: currentRoute = /simple/hooks/counter
    const { queryByTestId } = wrapper
    expect(queryByTestId('rs-header-iconBtn')).toBeTruthy()
  })

  // @@@@@ fix test
  xit('should navigate to the homepage when the navigation icon button is clicked', () => {
    const { queryByTestId } = wrapper
    const NavigationIconButton = queryByTestId('rs-header-iconBtn')

    expect(mockNavigateTo).not.toHaveBeenCalled()
    fireEvent.click(NavigationIconButton)
    expect(mockNavigateTo).toHaveBeenCalledWith(constants.navigation.routePaths.homepage)
  })

  it('should render the title dependent on the currentRoute', () => {
    const { queryByText, rerender } = wrapper
    expect(queryByText('Simple Hooks Counter')).toBeTruthy()

    rerender(<RouteHeader currentRoute={constants.navigation.routePaths.homepage} />)
    expect(queryByText('Simple Hooks Counter')).toBeNull()
    expect(queryByText('React Sandbox')).toBeTruthy()

    rerender(<RouteHeader currentRoute={constants.navigation.routePaths.dataTable} />)
    expect(queryByText('ReactSandbox')).toBeNull()
    expect(queryByText('React Table V7')).toBeTruthy()
  })
})
