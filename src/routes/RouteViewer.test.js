import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import RouteViewer from './RouteViewer'

import constants from '../constants'

Enzyme.configure({ adapter: new Adapter() })

describe('<RouteViewer />', () => {
  let wrapper, mockHistory, mockLocation, mockMatch

  beforeEach(() => {
    mockHistory = { replace: jest.fn() }
    mockLocation = { pathname: constants.navigation.routePaths.homepage }
    mockMatch = {}

    wrapper = shallow(<RouteViewer history={mockHistory} location={mockLocation} match={mockMatch} />)
  })

  it('should renders without error with its expected props', () => {
    expect(wrapper.find('[data-test="rs-routeViewer"]').length).toEqual(1)
  })

  describe('when the current location is the homepage', () => {
    it('should NOT render the "Back to Home" button', () => {
      // initial location is set to the homepage in the beforeEach

      expect(wrapper.find('[data-test="rs-routeViewer-navBtn"]').length).toEqual(0)
    })
  })

  describe('when the current location is any other route than the homepage', () => {
    it('should render the "Back to Home" button', () => {
      expect(wrapper.find('[data-test="rs-routeViewer-navBtn"]').length).toEqual(0)

      mockLocation = { pathname: constants.navigation.routePaths.counter }
      // current location route set to the counter route
      wrapper.setProps({ location: mockLocation })

      expect(wrapper.find('[data-test="rs-routeViewer-navBtn"]').length).toEqual(1)
    })

    it('should navigate user back to the homepage when the "Back to Home" button is clicked', () => {
      expect(mockHistory.replace).not.toHaveBeenCalled()

      mockLocation = { pathname: constants.navigation.routePaths.counter }
      // current location route set to the counter route
      wrapper.setProps({ location: mockLocation })

      const NavButton = wrapper.find('[data-test="rs-routeViewer-navBtn"]')
      NavButton.props().onClick()

      expect(mockHistory.replace).toHaveBeenCalledWith(constants.navigation.routePaths.homepage)
    })
  })
})
