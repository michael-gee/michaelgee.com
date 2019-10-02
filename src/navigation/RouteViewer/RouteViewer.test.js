import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from '@testing-library/react'

import RouteViewer from './RouteViewer'

// @@@@@ doesn't work
// jest.mock('../routes', () => {
//   return {
//     default: [
//       { path: '/pathname', component: () => {} },
//       { path: '/pathname1', component: () => {} },
//       { path: '/pathname2', component: () => {} }
//     ]
//   }
// })

describe('<RouteViewer />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(
      <Router>
        <Route component={RouteViewer}></Route>
      </Router>
    )
  })

  it('should render without error with its expected props', () => {
    const { queryByTestId } = wrapper

    expect(queryByTestId('rs-routeViewer')).toBeTruthy()
  })

  // @@@@@ doesn't work - cannot use import data in test
  xit('should render a Route component for every object returned from routes.js', () => {
    const { queryByTestId } = wrapper

    expect(queryByTestId('rs-routeViewer-route')).toBeTruthy()
  })
})
