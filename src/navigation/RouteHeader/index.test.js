import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'

import RouteHeader from './'

import { RS_ROUTE_PATHS } from '../../constants/navigation'

describe('<RouteHeader />', () => {
  let wrapper, history

  beforeEach(() => {
    history = createBrowserHistory()

    wrapper = render(
      <Router history={history}>
        <RouteHeader />
      </Router>
    )
  })

  it('should NOT render the home navigation icon button when the current route is the homepage', () => {
    const { queryByTestId } = wrapper

    // location.pathname is the homepage ( '/' ) by default
    expect(queryByTestId('rs-header-iconBtn')).toBeNull()
  })

  it('should render the home navigation icon button when the current route NOT is the homepage', () => {
    const { queryByTestId } = wrapper

    history.push('/simple-hooks-counter')

    expect(queryByTestId('rs-header-iconBtn')).toBeTruthy()
  })

  // @@@@@ fix test
  xit('should navigate back to the homepage when the navigation icon button is clicked', () => {
    const { queryByTestId } = wrapper
    const NavigationIconButton = queryByTestId('rs-header-iconBtn')
    history.push('/simple-hooks-counter')

    console.log(history)

    fireEvent.click(NavigationIconButton)

    console.log(history)

    expect(history.goBack).toHaveBeenCalled()
  })

  // @@@@@ fix test
  xit('should render the title dependent on the currentRoute', () => {
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
