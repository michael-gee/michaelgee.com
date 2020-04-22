import React, { useState, useEffect, useMemo } from 'react'

import CategorySelector from './CategorySelector'
import BodyContent from './BodyContent'
import Sidebar from './Sidebar'

import { customStatic, reactStatic } from './static'

import './Hooks.css'

const Hooks = () => {
  const [category, setCategory] = useState(null)
  const [currentHook, setCurrentHook] = useState(null)
  const isCustom = category && category.toLowerCase() === 'custom' ? true : false
  const hooksList = useMemo(() => {
    return isCustom ? customStatic.hooksList : reactStatic.hooksList
  }, [isCustom])

  useEffect(() => {
    if (!category) setCurrentHook(null)
    if (category && !currentHook) {
      setCurrentHook(hooksList[0])
    }
  }, [category, currentHook, hooksList])

  return !category ? (
    <CategorySelector onUpdateCategory={setCategory} />
  ) : (
    <main id={isCustom ? 'mg-hooks-custom' : 'mg-hooks-react'} className="mg-hooks-container">
      <Sidebar
        hooksList={hooksList}
        currentHook={currentHook}
        onSelectHookItem={setCurrentHook}
        onResetCategory={() => setCategory(null)}
        isCustom={isCustom}
      />

      <BodyContent currentHook={currentHook} updateCurrentHook={setCurrentHook} />
    </main>
  )
}

export default Hooks
