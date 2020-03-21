import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { render } from '@testing-library/react'

import RouteHeader from './RouteHeader'

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

  it('should configure the expected title from the current location pathname', () => {
    const { getByText } = wrapper

    history.replace('/')
    expect(getByText('React Sandbox')).toBeInTheDocument()

    // for all routes that aren't homepage, title should be capitalized and remove - from the pathname from the current location
    history.push('/mock-route-test')
    expect(getByText('Mock Route Test')).toBeInTheDocument()

    history.push('/another-mock-route')
    expect(getByText('Another Mock Route')).toBeInTheDocument()

    history.push('/testing-test')
    expect(getByText('Testing Test')).toBeInTheDocument()
  })

  it('should ONLY pass iconProps if the current route is NOT the homepage', () => {
    const { getByTitle, queryByTitle } = wrapper

    history.replace('/')
    expect(queryByTitle('Navigate To Homepage')).not.toBeInTheDocument()

    // iconProps.title is passed once the route is not the homepage
    history.push('/mock-route-test')
    expect(getByTitle('Navigate To Homepage')).toBeInTheDocument()

    history.push('/another-mock-route')
    expect(getByTitle('Navigate To Homepage')).toBeInTheDocument()

    history.push('/')
    expect(queryByTitle('Navigate To Homepage')).not.toBeInTheDocument()
  })
})
