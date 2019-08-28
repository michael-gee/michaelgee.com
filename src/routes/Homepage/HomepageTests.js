import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Homepage from './Homepage'

import constants from '../../constants'

Enzyme.configure({ adapter: new Adapter() })

const mockNavigateTo = jest.fn()

jest.mock('../../hooks/useNavigation', () => {
  return jest.fn().mockImplementation(() => {
    return { navigateTo: mockNavigateTo }
  })
})

describe('<Homepage />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Homepage />)
  })

  it('should renders without error with its expected props', () => {
    expect(wrapper.find('[data-test="rs-homepage"]').length).toEqual(1)
  })

  it('should trigger a navigation when button is clicked', () => {
    expect(mockNavigateTo).not.toHaveBeenCalled()

    const NavigationButton = wrapper.find('#nav-btn')
    NavigationButton.props().onClick()

    expect(mockNavigateTo).toHaveBeenCalledWith(constants.navigation.routePaths.counter)
  })
})
