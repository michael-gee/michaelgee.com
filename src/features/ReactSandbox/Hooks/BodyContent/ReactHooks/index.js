import React, { lazy } from 'react'

import Loadable from 'components/Loadable'

const fallback = () => {
  return <div className="cv-hookDetail-loading" />
}

export const UseCallbackDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseCallback'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
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

export const UseDebugValueDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseDebugValue'))
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

export const UseLayoutEffectDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseLayoutEffect'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
}

export const UseImperativeHandleDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseImperativeHandle'))
        return <Component />
      }}
      fallback={fallback}
    />
  )
}

export const UseMemoDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseMemo'))
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

export const UseRefDetails = () => {
  return (
    <Loadable
      render={() => {
        const Component = lazy(() => import('./UseRef'))
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
