import React from 'react'

import { Icon } from 'semantic-ui-react'

import Button from 'components/Buttons/Button'

import './Header.css'

const ReactPlaygroundHeader = () => {
  return (
    <>
      <header id="mg-reactPlayground-header">
        <Icon name="react" size="huge" />
        <h1>React Playground</h1>
      </header>

      <section id="mg-reactPlayground-nav">
        {/* Currently Selected nav should be react customColor */}
        <Button text="Animations" customColor="react" className="mg-reactPlayground-navBtn" />
        <Button text="Data Table" customColor="react-secondary" className="mg-reactPlayground-navBtn" />
        <Button text="Hooks" customColor="react-secondary" className="mg-reactPlayground-navBtn" />
      </section>
    </>
  )
}

export default ReactPlaygroundHeader
