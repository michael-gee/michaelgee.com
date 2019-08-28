import React from 'react'
import PropTypes from 'prop-types'

import { Pivot, PivotItem, PivotLinkFormat } from 'office-ui-fabric-react'

import './Pagination.css'

const Pagination = props => {
  const { setPageSize } = props

  return (
    <div id="rs-pagination-container">
      <div id="rs-pagination-totalItems">{props.currentItemsCount} results</div>

      {_renderPagination(props)}

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

function _renderPagination(props) {
  const { canNextPage, canPreviousPage, nextPage, previousPage, pageIndex, pageCount, gotoPage } = props

  return (
    <div id="rs-pagination">
      <button
        onClick={() => gotoPage(0)}
        className={pageIndex === 0 ? 'rs-pagination-disabled' : ''}
        disabled={pageIndex === 0}
      >
        {'<<'}
      </button>
      <button
        onClick={previousPage}
        className={!canPreviousPage ? 'rs-pagination-disabled' : ''}
        disabled={!canPreviousPage}
      >
        {'<'}
      </button>

      <div style={{ padding: '0 10px' }}>
        Page {pageIndex + 1} of {pageCount}
      </div>

      <button onClick={nextPage} className={!canNextPage ? 'rs-pagination-disabled' : ''} disabled={!canNextPage}>
        {'>'}
      </button>
      <button
        onClick={() => gotoPage(pageCount - 1)}
        className={pageIndex === pageCount - 1 ? 'rs-pagination-disabled' : ''}
        disabled={pageIndex === pageCount - 1}
      >
        {'>>'}
      </button>
    </div>
  )
}

function _handleTabChange(tab, setPageSize) {
  setPageSize(Number(tab))
}

Pagination.propTypes = {
  currentItemsCount: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired
}

export default Pagination
