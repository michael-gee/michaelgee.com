import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './'

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should renders without error with its expected props', () => {
    expect(wrapper.find('.rs-app-container').length).toEqual(1)
  })
})
