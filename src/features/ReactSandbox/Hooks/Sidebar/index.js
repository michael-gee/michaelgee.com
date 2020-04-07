import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Buttons/Button'

import { useNavigation } from 'hooks/mg-hooks'

import { MG_ROUTE_PATHS } from 'constants/navigation'

import './Sidebar.css'

const HooksSidebar = props => {
  const { navigateTo } = useNavigation()

  return (
    <aside id="mg-hooks-sidebar">
      <Button
        text="Back to Categories"
        onClick={_onBackBtnClick}
        customColor={props.isCustom ? 'canada' : 'react'}
        iconName="arrow left"
        id="mg-hooks-sidebar-backBtn"
      />

      {props.hooksList.map(hook => (
        <div className="mg-hooks-sidebarItem">{hook}</div>
      ))}
    </aside>
  )

  function _onBackBtnClick() {
    navigateTo(MG_ROUTE_PATHS.reactHooksCategories)
  }
}

HooksSidebar.propTypes = {
  hooksList: PropTypes.arrayOf(PropTypes.string).isRequired,
  isCustom: PropTypes.bool.isRequired
}

export default HooksSidebar
