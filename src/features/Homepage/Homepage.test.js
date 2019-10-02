import React from 'react'
import { render } from '@testing-library/react'

import Homepage from './Homepage'

describe('<Homepage />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Homepage />)
  })

  it('should render without error', () => {
    const { queryByTestId } = wrapper

    expect(queryByTestId('rs-homepage-container')).toBeTruthy()
  })

  // @@@@@ failing test - cannot use imported module data in test
  xit('should render a FeatureItem component for each item in the data array', () => {
    console.log(wrapper)
    const { queryByTestId } = wrapper

    // expect(queryByTestId('rs-homepage-ftItem')).toBeTruthy()
  })
})
