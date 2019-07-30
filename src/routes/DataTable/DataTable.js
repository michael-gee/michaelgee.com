import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTable, useTableState, useSortBy, useFilters, usePagination } from 'react-table'

import { Icon, TextField } from 'office-ui-fabric-react'

import Pagination from './Pagination'

import './DataTable.css'

const DataTable = props => {
  const { data } = props
  const columns = _generateTableColumns(props.columns)
  const initialState = useTableState({ pageSize: 10, pageIndex: 1 })

  const filterTypes = React.useMemo(
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
  const defaultColumn = React.useMemo(
    () => ({
      Filter: _renderDefaultFilter
    }),
    []
  )

  const instance = useTable(
    {
      data,
      columns,
      state: initialState,
      defaultColumn,
      filterTypes
    },
    useSortBy,
    useFilters,
    usePagination
  )

  console.log(instance)

  const { getTableProps, headerGroups, rows, page, setPageSize, prepareRow } = instance

  return (
    <div>
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
                        {column.canFilter ? (
                          column.render('Filter')
                        ) : (
                          <TextField iconProps={{ iconName: 'Filter' }} disabled={true} />
                        )}
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
                <tr key={item.original.id}>
                  {item.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
          )}
        </tbody>
      </table>

      <Pagination currentItemsCount={rows.length} setPageSize={setPageSize} />
    </div>
  )
}

function _renderSortIcon(column) {
  if (column.canSortBy) {
    return column.sorted ? (
      column.sortedDesc ? (
        <Icon iconName="SortDown" className="rs-dataTable-header-icon" />
      ) : (
        <Icon iconName="SortUp" className="rs-dataTable-header-icon" />
      )
    ) : (
      <Icon iconName="Sort" className="rs-dataTable-header-icon" />
    )
  } else {
    return null
  }
}

function _renderDefaultFilter({ filterValue, setFilter }) {
  return (
    <TextField
      iconProps={{ iconName: 'Filter' }}
      onChange={(_, newValue) => setFilter(newValue || undefined)} // Set undefined to remove the filter entirely}
    />
  )
}

function _generateTableColumns(columns) {
  return useMemo(() => columns, [])
}

DataTable.propTypes = {
  columns: PropTypes.array.isRequired
}

export default DataTable
