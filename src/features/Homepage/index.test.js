import React from 'react'
import { render } from '@testing-library/react'

import Homepage from './'

jest.mock('hooks/useNavigation', () => {
  return jest.fn().mockImplementation(() => {
    return { navigateTo: jest.fn() }
  })
})

describe('<Homepage />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Homepage />)
  })

  it('should render a <FeatureItem /> component for each item in the data array', () => {
    const { getAllByTestId } = wrapper
    expect(getAllByTestId('portfolio-item').length).toEqual(2)
  })
})
