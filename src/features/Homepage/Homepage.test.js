import React from 'react'
import { render } from '@testing-library/react'

import Homepage from './Homepage'

// import constants from '../../constants'

describe('<Homepage />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Homepage />)
  })

  it('should render without error', () => {
    const { queryByTestId } = wrapper

    expect(queryByTestId('rs-homepage-container')).toBeTruthy()
  })

  // @@@@@ need to learn how to mock imported data (Also in RouteViewer)
})
