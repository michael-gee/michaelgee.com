import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<App />)
  })

  it('should render without error', () => {
    const { queryByTestId } = wrapper
    expect(queryByTestId('app-container')).toBeTruthy()
  })
})
