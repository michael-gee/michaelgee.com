import React from 'react'
import { render } from '@testing-library/react'

import Homepage from './Homepage'

import data from './static'

describe('<Homepage />', () => {
  let wrapper, mockData

  beforeEach(() => {
    mockData = data

    wrapper = render(<Homepage data={mockData} />)
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
