import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Loading from './Loading'

Enzyme.configure({ adapter: new Adapter() })

describe('<Loading />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Loading />)
  })

  it('should renders without error with its expected props', () => {
    expect(wrapper.find('[data-test="rs-loading-container"]').length).toEqual(1)
  })
})
