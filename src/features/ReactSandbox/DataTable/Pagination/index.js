import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import './Pagination.css'

const Pagination = props => {
  const [currentTab, setCurrentTab] = useState(10)
  const tabOptions = [10, 25, 50, 100]

  return (
    <div id="mg-dataTable-pagination-container">
      <div className="mg-dataTable-pagination-section">{props.currentItemsCount} results</div>

      {_renderPagination()}

      <div className="mg-dataTable-pagination-section mg-dataTable-pagination-pivot">
        {tabOptions.map(tab => {
          return (
            <Button
              variant="icon"
              onClick={() => _handleTabChange(tab)}
              customColor={currentTab === tab ? 'react' : undefined}
              size="mini"
              style={{ padding: '8px 12px', borderRadius: 'none' }}
              key={`key-${tab}`}
            >
              {tab}
            </Button>
          )
        })}
      </div>
    </div>
  )

  function _renderPagination() {
    return (
      <div id="mg-dataTable-pagination-content" className="mg-dataTable-pagination-section">
        <button
          onClick={() => props.gotoPage(0)}
          className={props.pageIndex === 0 ? 'mg-dataTable-pagination-disabled' : ''}
          disabled={props.pageIndex === 0}
        >
          {'<<'}
        </button>
        <button
          onClick={props.previousPage}
          className={!props.canPreviousPage ? 'mg-dataTable-pagination-disabled' : ''}
          disabled={!props.canPreviousPage}
        >
          {'<'}
        </button>

        <div style={{ padding: '0 10px' }}>
          Page {props.pageIndex + 1} of {props.pageCount}
        </div>

        <button
          onClick={props.nextPage}
          className={!props.canNextPage ? 'mg-dataTable-pagination-disabled' : ''}
          disabled={!props.canNextPage}
        >
          {'>'}
        </button>
        <button
          onClick={() => props.gotoPage(props.pageCount - 1)}
          className={props.pageIndex === props.pageCount - 1 ? 'mg-dataTable-pagination-disabled' : ''}
          disabled={props.pageIndex === props.pageCount - 1}
        >
          {'>>'}
        </button>
      </div>
    )
  }

  function _handleTabChange(tab) {
    props.setPageSize(Number(tab))
    setCurrentTab(tab)
  }
}

Pagination.propTypes = {
  currentItemsCount: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  gotoPage: PropTypes.func.isRequired
}

export default Pagination
