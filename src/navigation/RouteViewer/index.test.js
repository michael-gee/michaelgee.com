import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from '@testing-library/react'

import RouteViewer from './'

import routes from '../routes'

describe('<RouteViewer />', () => {
  let wrapper, mockRoutes

  beforeEach(() => {
    mockRoutes = routes

    wrapper = render(
      <Router>
        <Route component={() => <RouteViewer routes={mockRoutes} />} />
      </Router>
    )
  })

  it('should render without error with its expected props', () => {
    const { queryByTestId } = wrapper

    expect(queryByTestId('rs-routeViewer')).toBeTruthy()
  })

  it('should render a <Route /> component for every routes prop item', () => {
    const { queryAllByTestId } = wrapper

    expect(queryAllByTestId('rs-routeViewer-route').length).toEqual(3)
  })
})
