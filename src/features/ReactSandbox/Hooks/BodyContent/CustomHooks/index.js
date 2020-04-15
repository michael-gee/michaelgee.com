import React, { lazy } from 'react'

import Loadable from 'components/Loadable'

const fallback = () => {
  return <div className="cv-hookDetail-loading" />
}

export const UseApiDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseApi'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
}

export const UseHasChangesDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseHasChanges'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
}

export const UseLocalStorageDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseLocalStorage'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
}

export const UseNavigationDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseNavigation'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
}

export const UsePreviousDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UsePrevious'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
}
