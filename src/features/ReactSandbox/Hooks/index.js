import React from 'react'

import BodyContent from './BodyContent'
import Sidebar from './Sidebar'

import { useParams } from 'react-router-dom'

import { customStatic, reactStatic } from './static'

import './Hooks.css'

const Hooks = () => {
  // const [currentHook, setCurrentHook] = useState()
  const { category } = useParams()
  const isCustom = category.toLowerCase() === 'custom' ? true : false
  const data = isCustom ? customStatic : reactStatic

  return (
    <main id={isCustom ? 'mg-hooks-custom' : 'mg-hooks-react'} className="mg-hooks-container">
      <Sidebar hooksList={data.hookList} isCustom={isCustom} />

      <BodyContent />
    </main>
  )
}

export default Hooks
