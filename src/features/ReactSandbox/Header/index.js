import React from 'react'

import { Icon } from 'semantic-ui-react'
import Button from 'components/Button'

import { useParams } from 'react-router-dom'
import useNavigation from 'hooks/useNavigation'

import { MG_ROUTE_PATHS } from 'constants/navigation'

import './Header.css'

const ReactSandboxHeader = () => {
  const { currentPage } = useParams()
  const { navigateTo } = useNavigation()
  const pageOptions = _configurePageOptions()

  return (
    <>
      <header id="mg-reactSandbox-header">
        <Button
          variant="icon"
          icon="home"
          onClick={() => navigateTo(MG_ROUTE_PATHS.portfolio)}
          customColor="react"
        />

        <div id="mg-reactSandbox-headerTitle">
          <Icon name="react" size="huge" />
          <h1>React Sandbox</h1>
        </div>

        <div id="mg-reactSandbox-headerSpacer" />
      </header>

      <nav id="mg-reactSandbox-nav">
        {pageOptions.map(item => (
          <Button
            text={item.text}
            onClick={() => navigateTo(item.pathname)}
            icon={item.text.toLowerCase() === 'home' ? 'home' : undefined}
            customColor={currentPage === item.key ? 'react' : 'react-secondary'}
            className="mg-reactSandbox-navBtn"
            key={item.key}
          />
        ))}
      </nav>
    </>
  )

  function _configurePageOptions() {
    return [
      { text: 'Hooks', pathname: MG_ROUTE_PATHS.reactHooksCategories, key: 'hooks' },
      { text: 'Data Table', pathname: MG_ROUTE_PATHS.reactDataTable, key: 'data-table' }
    ]
  }
}

export default ReactSandboxHeader
