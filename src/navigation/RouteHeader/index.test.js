import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import RouteHeader from './'

import { RS_ROUTE_PATHS } from '../../constants/navigation'

describe('<RouteHeader />', () => {
  let wrapper, mockPathname, mockGoBack

  beforeEach(() => {
    mockPathname = RS_ROUTE_PATHS.counter
    mockGoBack = jest.fn()

    wrapper = render(<RouteHeader location={{ pathname: mockPathname }} history={{ goBack: mockGoBack }} />)
  })

  it('should render without error', () => {
    const { queryByTestId } = wrapper

    expect(queryByTestId('rs-header-container')).toBeTruthy()
  })

  it('should NOT render the home navigation icon button when the current route is the homepage', () => {
    const { queryByTestId, rerender } = wrapper
    // props.location.pathname set to homepage
    rerender(<RouteHeader location={{ pathname: RS_ROUTE_PATHS.homepage }} history={{ goBack: mockGoBack }} />)

    expect(queryByTestId('rs-header-iconBtn')).toBeNull()
  })

  it('should render the home navigation icon button when the current route NOT is the homepage', () => {
    // homepage is NOT the currentRoute by default: currentRoute = /simple/hooks/counter
    const { queryByTestId } = wrapper
    expect(queryByTestId('rs-header-iconBtn')).toBeTruthy()
  })

  it('should navigate back to the homepage when the navigation icon button is clicked', () => {
    const { queryByTestId } = wrapper
    const NavigationIconButton = queryByTestId('rs-header-iconBtn')

    expect(mockGoBack).not.toHaveBeenCalled()
    fireEvent.click(NavigationIconButton)
    expect(mockGoBack).toHaveBeenCalled()
  })

  it('should render the title dependent on the currentRoute', () => {
    const { queryByText, rerender } = wrapper
    expect(queryByText('Simple Hooks Counter')).toBeTruthy()

    rerender(<RouteHeader location={{ pathname: RS_ROUTE_PATHS.homepage }} history={{ goBack: mockGoBack }} />)
    expect(queryByText('Simple Hooks Counter')).toBeNull()
    expect(queryByText('React Sandbox')).toBeTruthy()

    rerender(<RouteHeader location={{ pathname: RS_ROUTE_PATHS.dataTable }} history={{ goBack: mockGoBack }} />)
    expect(queryByText('ReactSandbox')).toBeNull()
    expect(queryByText('React Table V7')).toBeTruthy()
  })
})
