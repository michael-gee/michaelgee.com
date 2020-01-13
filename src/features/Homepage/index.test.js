import React from 'react'
import { render } from '@testing-library/react'

import Homepage from './'

describe('<Homepage />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Homepage />)
  })

  it('should render a <FeatureItem /> component for each item in the data array', () => {
    const { queryAllByTestId } = wrapper

    expect(queryAllByTestId('rs-homepage-ftItem').length).toEqual(2)
  })
})
