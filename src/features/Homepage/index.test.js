import React from 'react'
import { render } from '@testing-library/react'

import Homepage from './'

describe('<Homepage />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Homepage />)
  })

  it('should render without error', () => {
    const { queryByTestId } = wrapper

    expect(queryByTestId('rs-homepage-container')).toBeTruthy()
  })

  it('should render a <FeatureItem /> component for each item in the data array', () => {
    const { queryAllByTestId } = wrapper

    expect(queryAllByTestId('rs-homepage-ftItem').length).toEqual(3)
  })
})
