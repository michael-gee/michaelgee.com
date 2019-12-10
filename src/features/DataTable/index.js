import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTable, useSortBy, useFilters, usePagination } from 'react-table'

import TextField from '@material-ui/core/TextField'
import SortIcon from '@material-ui/icons/SwapVertRounded'
import SortUpIcon from '@material-ui/icons/VerticalAlignTopRounded'
import SortDownIcon from '@material-ui/icons/VerticalAlignBottomRounded'

import Pagination from './Pagination'

import './DataTable.css'

const DataTable = props => {
  const { data } = props
  const columns = useMemo(() => props.columns, [props.columns])

  const filterTypes = useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      }
    }),
    []
  )
  const defaultColumn = useMemo(
    () => ({
      Filter: _renderDefaultFilter
    }),
    []
  )

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    page,

    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex }
  } = useTable(
    {
      data,
      columns,
      defaultColumn,
      filterTypes,
      initialState: { pageIndex: 0 }
    },
    useFilters,
    useSortBy,
    usePagination
  )

  return (
    <div id="rs-dataTable-container">
      <table {...getTableProps()} id="rs-dataTable">
        {headerGroups.map(headerGroup => {
          return (
            <thead {...headerGroup.getHeaderGroupProps()} id="rs-dataTable-header-container">
              <tr>
                {headerGroup.headers.map(column => {
                  return (
                    <th className="rs-dataTable-header" key={column.id}>
                      <div
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className="rs-dataTable-header-content"
                      >
                        {column.render('Header')}
                        <span>{_renderSortIcon(column)}</span>
                      </div>

                      <div className="rs-dataTable-filter">
                        {column.canFilter ? column.render('Filter') : <TextField disabled={true} />}
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>
          )
        })}

        <tbody id="rs-dataTable-body">
          {page.map(
            (item, i) =>
              prepareRow(item) || (
                <tr key={i}>
                  {item.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
          )}
        </tbody>
      </table>

      <Pagination
        currentItemsCount={rows.length}
        setPageSize={setPageSize}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        previousPage={previousPage}
        pageIndex={pageIndex}
        pageCount={pageCount}
        gotoPage={gotoPage}
      />
    </div>
  )

  function _renderSortIcon(column) {
    if (column.canSort) {
      return column.isSorted ? (
        column.isSortedDesc ? (
          <SortDownIcon className="rs-dataTable-header-icon" />
        ) : (
          <SortUpIcon className="rs-dataTable-header-icon" />
        )
      ) : (
        <SortIcon className="rs-dataTable-header-icon" />
      )
    } else {
      return null
    }
  }

  function _renderDefaultFilter({ column: { filterValue, setFilter } }) {
    return (
      <TextField
        value={filterValue || ''}
        onChange={(_, newValue) => setFilter(newValue || undefined)} // Set undefined to remove the filter entirely
        // iconProps={{ iconName: 'Filter' }}
      />
    )
  }
}

DataTable.propTypes = {
  columns: PropTypes.array.isRequired
}

export default DataTable
