import React, { lazy } from 'react'
import { render, screen } from '@testing-library/react'

import Loadable from './'

describe('<Loadable />', () => {
  it('should initially render the fallback component until the component is loaded', async () => {
    render(
      <Loadable
        fallback={() => <MockFallbackComponent />}
        render={componentProps => {
          const Component = MockRenderComponent()
          return <Component {...componentProps} />
        }}
        mockprop="test"
      />
    )

    expect(screen.getByTestId('mock-loading')).toBeInTheDocument()
    const LazyButton = await screen.findByTestId('default-btn')

    expect(screen.queryByTestId('mock-loading')).not.toBeInTheDocument()
    expect(LazyButton).toBeInTheDocument()
    expect(LazyButton).toHaveAttribute('mockprop', 'test')
  })
})

function MockFallbackComponent() {
  return <div data-testid="mock-loading" />
}

function MockRenderComponent() {
  return lazy(() => import('../Button'))
}
