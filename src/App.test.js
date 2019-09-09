import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('should render without error', () => {
  const { container } = render(<App />)

  expect(container.querySelector('#rs-app-container')).toBeTruthy()
})
