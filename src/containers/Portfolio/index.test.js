import React from 'react'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './'

describe('<Portfolio />', () => {
  it('initial test', () => {
    render(<Portfolio />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })
})
