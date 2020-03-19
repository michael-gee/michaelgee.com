import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'

import RouteHeader from '.'

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

    history.replace('/simple-hooks-counter')

    expect(queryByTestId('rs-header-iconBtn')).toBeTruthy()
  })

  it('should navigate back to the homepage when the navigation icon button is clicked', () => {
    const { queryByTestId, rerender } = wrapper
    const NavigationIconButton = queryByTestId('rs-header-iconBtn')

    history.replace('/simple-hooks-counter')
    history.goBack = jest.fn()

    rerender(
      <Router history={history}>
        <RouteHeader />
      </Router>
    )

    fireEvent.click(NavigationIconButton)

    expect(history.goBack).toHaveBeenCalled()
  })

  it('should render the title dependent on the currentRoute', () => {
    const { queryByText } = wrapper

    history.replace('/')
    expect(queryByText('React Sandbox')).toBeTruthy()

    history.push('/simple-hooks-counter')
    expect(queryByText('Simple Hooks Counter')).toBeTruthy()
    expect(queryByText('React Sandbox')).toBeNull()

    history.push('/react-table-v7')
    expect(queryByText('React Table V7')).toBeTruthy()
    expect(queryByText('Simple Hooks Counter')).toBeNull()
  })
})
