import React from 'react'
import { render } from '@testing-library/react'

import FeatureItem from './FeatureItem'

describe('<FeatureItem />', () => {
  let wrapper, mockTitle, mockRoute, mockDate, mockDescription

  beforeEach(() => {
    mockTitle = 'Simple Hooks Counter'
    mockRoute = '/simple/hooks/counter'
    mockDate = 'May 22nd, 2019'
    mockDescription = 'Mock Description'

    wrapper = render(<FeatureItem title={mockTitle} route={mockRoute} date={mockDate} description={mockDescription} />)
  })

  it('should render without error with its expected props', () => {
    const { queryByTestId } = wrapper

    expect(queryByTestId('rs-featureItem-container')).toBeTruthy()
  })

  // @@@@@ finish testing
  // it('should NOT display the item description by default', () => {
  //   const { queryByTestId } = wrapper

  //   const el = queryByTestId('rs-featureItem-collapse')

  //   console.log(el)

  //   // expect(queryByTestId('rs-featureItem-container')).toBeTruthy()
  // })
})
