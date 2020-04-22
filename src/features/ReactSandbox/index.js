import React, { useEffect } from 'react'

import Header from './Header'
import DataTable from './DataTable'
import Hooks from './Hooks'

import { useParams } from 'react-router-dom'
import useNavigation from 'hooks/useNavigation'

const ReactSandbox = () => {
  const { currentPage } = useParams()
  const { navigateTo } = useNavigation()

  useEffect(() => {
    if (!currentPage) navigateTo('/react-sandbox/hooks')
  }, [currentPage, navigateTo])

  return (
    <>
      <Header />

      {_renderCurrentPage()}
    </>
  )

  function _renderCurrentPage() {
    switch (currentPage) {
      case 'data-table':
        return <DataTable />
      case 'hooks':
        return <Hooks />

      default:
        return <div>No page was found</div>
    }
  }
}

export default ReactSandbox
