import React from 'react'
import PropTypes from 'prop-types'

import { Pivot, PivotItem, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot'

import './Pagination.css'

const Pagination = props => {
  const { setPageSize } = props

  return (
    <div id="rs-pagination-container">
      <div id="rs-pagination-totalItems">{props.currentItemsCount} results</div>

      <div style={{ textAlign: 'center' }}>Pagination</div>

      <div id="rs-pagination-viewItems">
        <Pivot linkFormat={PivotLinkFormat.tabs} onLinkClick={ev => _handleTabChange(ev.props.itemKey, setPageSize)}>
          <PivotItem headerText="10" itemKey="10" />
          <PivotItem headerText="25" itemKey="25" />
          <PivotItem headerText="50" itemKey="50" />
          <PivotItem headerText="100" itemKey="100" />
        </Pivot>
      </div>
    </div>
  )
}

function _handleTabChange(tab, setPageSize) {
  setPageSize(tab)
}

Pagination.propTypes = {
  currentItemsCount: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired
}

export default Pagination
