import React from 'react'
import { render } from '@testing-library/react'

import Index from './'

describe('initial test', () => {
  it('test', () => {
    const { debug } = render(<Index />)

    debug()
  })
})
