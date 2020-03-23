import React, { useMemo } from 'react'
import { useTable, useSortBy, useFilters, usePagination } from 'react-table'

import { Input, Icon } from 'semantic-ui-react'
import Pagination from './Pagination'

import makeColumns from './static'
import makeData from './makeData'

import './DataTable.css'

const DataTable = () => {
  const data = makeData(100)
  const columns = useMemo(() => makeColumns, [])

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
    <div className="mg-dataTable-container">
      <table {...getTableProps()} className="mg-dataTable">
        {headerGroups.map(headerGroup => {
          return (
            <thead {...headerGroup.getHeaderGroupProps()} className="mg-dataTable-header">
              <tr>
                {headerGroup.headers.map(column => {
                  return (
                    <th key={column.id}>
                      <div
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className="mg-dataTable-header-content"
                      >
                        {column.render('Header')}
                        <span>{_renderSortIcon(column)}</span>
                      </div>

                      <div className="mg-dataTable-rowFilter">
                        {column.canFilter ? (
                          column.render('Filter')
                        ) : (
                          <Input
                            action={{
                              icon: 'filter'
                            }}
                            disabled
                          />
                        )}
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>
          )
        })}

        <tbody className="mg-dataTable-body">
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
          <Icon name="sort content descending" />
        ) : (
          <Icon name="sort content ascending" />
        )
      ) : (
        <Icon name="sort" />
      )
    } else {
      return null
    }
  }

  function _renderDefaultFilter({ column: { filterValue, setFilter } }) {
    return (
      <Input
        value={filterValue || ''}
        onChange={(ev, data) => {
          setFilter(data.value)
        }}
        action={{
          icon: 'filter',
          onClick: () => {
            console.log('hello')
          }
        }}
      />
    )
  }
}

export default DataTable
