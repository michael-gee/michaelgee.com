import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import './Sidebar.css'

const HooksSidebar = props => {
  return (
    <aside id="mg-hooks-sidebar">
      <Button
        text="Back to Categories"
        onClick={props.onResetCategory}
        icon="arrow left"
        customColor={props.isCustom ? 'canada' : 'react'}
        id="mg-hooks-sidebar-backBtn"
      />

      {props.hooksList.map(hook => (
        <div
          onClick={() => {
            if (props.currentHook !== hook) props.onSelectHookItem(hook)
          }}
          id={props.currentHook === hook ? 'mg-hook-currentlySelected' : undefined}
          className="mg-hook-item"
          key={hook}
        >
          {hook}
        </div>
      ))}
    </aside>
  )
}

HooksSidebar.propTypes = {
  hooksList: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentHook: PropTypes.string,
  onSelectHookItem: PropTypes.func.isRequired,
  onResetCategory: PropTypes.func.isRequired,
  isCustom: PropTypes.bool.isRequired
}

export default HooksSidebar
