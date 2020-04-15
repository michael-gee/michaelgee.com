import React, { lazy } from 'react'

import Loadable from 'components/Loadable'

const fallback = () => {
  return <div className="cv-hookDetail-loading" />
}

export const UseContextDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseContext'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
}

export const UseEffectDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseEffect'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
}

export const UseReducerDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseReducer'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
}

export const UseStateDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseState'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
}
