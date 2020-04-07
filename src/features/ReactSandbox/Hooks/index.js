import React, { useState, useEffect, useMemo } from 'react'

import BodyContent from './BodyContent'
import Sidebar from './Sidebar'

import { useParams } from 'react-router-dom'

import { customStatic, reactStatic } from './static'

import './Hooks.css'

const Hooks = () => {
  const [currentHook, setCurrentHook] = useState()
  const { category } = useParams()
  const isCustom = category.toLowerCase() === 'custom' ? true : false
  const data = useMemo(() => {
    return isCustom ? customStatic : reactStatic
  }, [isCustom])

  useEffect(() => {
    setCurrentHook(data.hookList[0])
  }, [data])

  return (
    <main id={isCustom ? 'mg-hooks-custom' : 'mg-hooks-react'} className="mg-hooks-container">
      <Sidebar
        hooksList={data.hookList}
        currentHook={currentHook}
        onSelectHookItem={_onHookItemSelected}
        isCustom={isCustom}
      />

      <BodyContent currentHook={currentHook} />
    </main>
  )

  function _onHookItemSelected(hookItem) {
    setCurrentHook(hookItem)
  }
}

export default Hooks
