import React, { useState } from 'react'
import PropTypes from 'prop-types'

import IconButton from 'components/Buttons/IconButton'

import './Pagination.css'

const Pagination = props => {
  const { setPageSize, currentItemsCount } = props
  const [currentTab, setCurrentTab] = useState(10)
  const tabOptions = [10, 25, 50, 100]

  return (
    <div id="mg-dataTable-pagination-container">
      <div className="mg-dataTable-pagination-section">{currentItemsCount} results</div>

      {_renderPagination()}

      <div className="mg-dataTable-pagination-section mg-dataTable-pagination-pivot">
        {tabOptions.map(tab => {
          return (
            <IconButton
              customColor={currentTab === tab ? 'react' : undefined}
              size="mini"
              onClick={() => _handleTabChange(tab)}
              style={{ padding: '8px 12px', borderRadius: 'none' }}
              key={`key-${tab}`}
            >
              {tab}
            </IconButton>
          )
        })}
      </div>
    </div>
  )

  function _renderPagination() {
    const { canNextPage, canPreviousPage, nextPage, previousPage, pageIndex, pageCount, gotoPage } = props

    return (
      <div id="mg-dataTable-pagination-content" className="mg-dataTable-pagination-section">
        <button
          onClick={() => gotoPage(0)}
          className={pageIndex === 0 ? 'mg-dataTable-pagination-disabled' : ''}
          disabled={pageIndex === 0}
        >
          {'<<'}
        </button>
        <button
          onClick={previousPage}
          className={!canPreviousPage ? 'mg-dataTable-pagination-disabled' : ''}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>

        <div style={{ padding: '0 10px' }}>
          Page {pageIndex + 1} of {pageCount}
        </div>

        <button
          onClick={nextPage}
          className={!canNextPage ? 'mg-dataTable-pagination-disabled' : ''}
          disabled={!canNextPage}
        >
          {'>'}
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          className={pageIndex === pageCount - 1 ? 'mg-dataTable-pagination-disabled' : ''}
          disabled={pageIndex === pageCount - 1}
        >
          {'>>'}
        </button>
      </div>
    )
  }

  function _handleTabChange(tab) {
    setPageSize(Number(tab))
    setCurrentTab(tab)
  }
}

Pagination.propTypes = {
  currentItemsCount: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired
}

export default Pagination
