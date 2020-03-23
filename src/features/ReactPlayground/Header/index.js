import React from 'react'

import { Icon } from 'semantic-ui-react'
import Button from 'components/Buttons/Button'

import { useParams } from 'react-router-dom'
import useNavigation from 'hooks/useNavigation'

import { MG_ROUTE_PATHS } from 'constants/navigation'

import './Header.css'

const ReactPlaygroundHeader = () => {
  const { route } = useParams()
  const { navigateTo } = useNavigation()
  const routes = _configureRoutes()

  return (
    <>
      <header id="mg-reactPlayground-header">
        <Icon name="react" size="huge" />
        <h1>React Playground</h1>
      </header>

      <section id="mg-reactPlayground-nav">
        {routes.map(item => (
          <Button
            text={item.text}
            onClick={() => navigateTo(item.pathname)}
            iconName={item.text.toLowerCase() === 'home' ? 'home' : undefined}
            customColor={route === item.key ? 'react' : 'react-secondary'}
            className="mg-reactPlayground-navBtn"
            key={item.key}
          />
        ))}
      </section>
    </>
  )

  function _configureRoutes() {
    return [
      { text: 'Hooks', pathname: MG_ROUTE_PATHS.reactHooks, key: 'hooks' },
      // { text: 'Animations', pathname: MG_ROUTE_PATHS.reactAnimations, key: 'animations' },
      { text: 'Data Table', pathname: MG_ROUTE_PATHS.reactDataTable, key: 'data-table' }
    ]
  }
}

export default ReactPlaygroundHeader
