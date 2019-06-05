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
    expect(wrapper.find('[data-test="rs-hooks-container"]').length).toEqual(1)
  })

  it('should set the initial count state to 0', () => {
    expect(wrapper.find('[data-test="counter-count"]').text()).toContain(0)
  })

  it('should add 1 to the current count state when the "Increment" button is clicked', () => {
    expect(wrapper.find('[data-test="counter-count"]').text()).toContain(0)

    let IncrementButton = wrapper.find('[data-test="counter-incrementBtn"]')
    IncrementButton.props().onClick()
    expect(wrapper.find('[data-test="counter-count"]').text()).toContain(1)

    IncrementButton = wrapper.find('[data-test="counter-incrementBtn"]')
    IncrementButton.props().onClick()
    expect(wrapper.find('[data-test="counter-count"]').text()).toContain(2)
  })

  it('should subtract 1 frin the current count state when the "Decrement" button is clicked', () => {
    expect(wrapper.find('[data-test="counter-count"]').text()).toContain(0)

    let IncrementButton = wrapper.find('[data-test="counter-incrementBtn"]')
    IncrementButton.props().onClick()
    expect(wrapper.find('[data-test="counter-count"]').text()).toContain(1)

    let DecrementBtn = wrapper.find('[data-test="counter-decrementBtn"]')
    DecrementBtn.props().onClick()
    expect(wrapper.find('[data-test="counter-count"]').text()).toContain(0)
  })
})
