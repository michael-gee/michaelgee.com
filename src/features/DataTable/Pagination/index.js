import React from 'react'
import PropTypes from 'prop-types'

import './Pagination.css'

const Pagination = props => {
  const { setPageSize, currentItemsCount } = props

  return (
    <div id="rs-dataTable-pagination-container">
      <div className="rs-dataTable-pagination-section">{currentItemsCount} results</div>

      {_renderPagination()}

      <div className="rs-dataTable-pagination-section rs-dataTable-pagination-pivot">
        {/* <Pivot linkFormat={PivotLinkFormat.tabs} onLinkClick={ev => _handleTabChange(ev.props.itemKey)}>
          <PivotItem headerText="10" itemKey="10" />
          <PivotItem headerText="25" itemKey="25" />
          <PivotItem headerText="50" itemKey="50" />
          <PivotItem headerText="100" itemKey="100" />
        </Pivot> */}
        Material UI Pivot
      </div>
    </div>
  )

  function _renderPagination() {
    const { canNextPage, canPreviousPage, nextPage, previousPage, pageIndex, pageCount, gotoPage } = props

    return (
      <div id="rs-dataTable-pagination-content" className="rs-dataTable-pagination-section">
        <button
          onClick={() => gotoPage(0)}
          className={pageIndex === 0 ? 'rs-dataTable-pagination-disabled' : ''}
          disabled={pageIndex === 0}
        >
          {'<<'}
        </button>
        <button
          onClick={previousPage}
          className={!canPreviousPage ? 'rs-dataTable-pagination-disabled' : ''}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>

        <div style={{ padding: '0 10px' }}>
          Page {pageIndex + 1} of {pageCount}
        </div>

        <button
          onClick={nextPage}
          className={!canNextPage ? 'rs-dataTable-pagination-disabled' : ''}
          disabled={!canNextPage}
        >
          {'>'}
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          className={pageIndex === pageCount - 1 ? 'rs-dataTable-pagination-disabled' : ''}
          disabled={pageIndex === pageCount - 1}
        >
          {'>>'}
        </button>
      </div>
    )
  }

  function _handleTabChange(tab) {
    setPageSize(Number(tab))
  }
}

Pagination.propTypes = {
  currentItemsCount: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired
}

export default Pagination
