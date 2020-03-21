import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  let wrapper, mockTitle, mockIconProps

  beforeEach(() => {
    mockTitle = 'Mock Title'
    mockIconProps = {
      icon: 'home',
      onClick: jest.fn(),
      title: 'Mock Title'
    }

    wrapper = render(<Header title={mockTitle} iconProps={mockIconProps} />)
  })

  it('should render the title passed from props', () => {
    const { queryByText } = wrapper
    expect(queryByText(mockTitle)).toBeInTheDocument()
  })

  it('should ONLY render an action IconButton if iconProps are passed from props', () => {
    const { getByTestId, queryByTestId, rerender } = wrapper
    expect(getByTestId('mg-header-iconBtn')).toBeInTheDocument()

    rerender(<Header title={mockTitle} />)
    expect(queryByTestId('mg-header-iconBtn')).not.toBeInTheDocument()
  })

  // it('should navigate back to the homepage when the navigation icon button is clicked', () => {
  //   const { queryByTestId, rerender } = wrapper
  //   const NavigationIconButton = queryByTestId('mg-header-iconBtn')

  //   history.replace('/simple-hooks-counter')
  //   history.goBack = jest.fn()

  //   rerender(
  //     <Router history={history}>
  //       <RouteHeader />
  //     </Router>
  //   )

  //   fireEvent.click(NavigationIconButton)

  //   expect(history.goBack).toHaveBeenCalled()
  // })
})
