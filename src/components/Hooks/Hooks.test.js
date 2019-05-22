import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Hooks from './Hooks'

Enzyme.configure({ adapter: new Adapter() })

describe('<Hooks />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Hooks />)
  })

  it('should renders without error with its expected props', () => {
    expect(wrapper.find('#rs-hooks-container').length).toEqual(1)
  })
})
