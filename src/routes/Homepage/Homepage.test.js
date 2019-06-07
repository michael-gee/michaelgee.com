import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Homepage from './Homepage'

Enzyme.configure({ adapter: new Adapter() })

describe('<Homepage />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Homepage />)
  })

  it('should renders without error with its expected props', () => {
    expect(wrapper.find('[data-test="rs-homepage"]').length).toEqual(1)
  })
})
