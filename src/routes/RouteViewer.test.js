import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import RouteViewer from './RouteViewer'

Enzyme.configure({ adapter: new Adapter() })

describe('<RouteViewer />', () => {
  let wrapper, mockHistory, mockLocation, mockMatch

  beforeEach(() => {
    mockHistory = {}
    mockLocation = {}
    mockMatch = {}

    wrapper = shallow(<RouteViewer history={mockHistory} location={mockLocation} match={mockMatch} />)
  })

  it('should renders without error with its expected props', () => {
    expect(wrapper.find('[data-test="rs-routeViewer"]').length).toEqual(1)
  })
})
