import React, { useMemo } from 'react'
import { useTable, useSortBy, useFilters, usePagination } from 'react-table'

import { Input, Icon } from 'semantic-ui-react'
import Pagination from './Pagination'

// import makeColumns from './static'
import makeData from './makeData'

import './DataTable.css'

const DataTable = () => {
  const data = makeData(100)
  const columns = _configureColumns()

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
      Filter: DefaultColumnFilter
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
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
        <thead className="mg-dataTable-header">
          {headerGroups.map(headerGroup => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => {
                  return (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())} key={column.id}>
                      <div className="mg-dataTable-header-content">
                        {column.render('Header')}
                        <span>{_renderSortIcon(column)}</span>
                      </div>

                      <div className="mg-dataTable-rowFilter">
                        {column.filter ? (
                          column.render('Filter')
                        ) : (
                          <Input
                            action={{
                              icon: 'filter',
                              disabled: true
                            }}
                            disabled
                          />
                        )}
                      </div>
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>

        <tbody {...getTableBodyProps()} className="mg-dataTable-body">
          {page.map((item, i) => {
            prepareRow(item)
            return (
              <tr {...item.getRowProps()} key={i}>
                {item.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
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

  function _configureColumns() {
    const columns = useMemo(() => {
      return [
        {
          Header: 'First Name',
          accessor: 'firstName',
          filter: DefaultColumnFilter
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
          canFilter: false
          // filter: DefaultColumnFilter
          // filter: TextColumnFilter
        }
      ]
    }, [])

    return columns
  }

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
}

function DefaultColumnFilter({ column: { filterValue, setFilter } }) {
  return (
    <Input
      value={filterValue || undefined}
      onChange={(ev, data) => {
        setFilter(data.value || undefined)
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

export default DataTable
