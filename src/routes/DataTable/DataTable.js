import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTable, useSortBy } from 'react-table'

import { Icon } from 'office-ui-fabric-react'

import makeData from './makeData'

import './DataTable.css'

const DataTable = props => {
  const data = useMemo(() => makeData(100))
  const columns = _generateTableColumns(props.columns)

  const instance = useTable(
    {
      data,
      columns
    },
    useSortBy
  )

  const { getTableProps, headerGroups, rows, prepareRow } = instance

  return (
    <table id="rs-dataTable" {...getTableProps()}>
      {headerGroups.map(headerGroup => {
        return (
          <thead id="rs-dataTable-header-container" {...headerGroup.getHeaderGroupProps()}>
            <tr>
              {headerGroup.headers.map(column => {
                console.log(column)
                return (
                  <th className="rs-dataTable-header" {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div className="rs-dataTable-header-content">
                      {column.render('Header')}
                      {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
                      <span>
                        {column.canSortBy ? (
                          column.sorted ? (
                            column.sortedDesc ? (
                              <Icon iconName="SortDown" className="rs-dataTable-header-icon" />
                            ) : (
                              <Icon iconName="SortUp" className="rs-dataTable-header-icon" />
                            )
                          ) : (
                            <Icon iconName="Sort" className="rs-dataTable-header-icon" />
                          )
                        ) : null}
                      </span>
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>
        )
      })}

      <tbody id="rs-dataTable-body">
        {rows.map(
          (row, i) =>
            prepareRow(row) || (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
        )}
      </tbody>
    </table>
  )
}

function _generateTableColumns(columns) {
  return useMemo(() => columns)
}

DataTable.propTypes = {
  columns: PropTypes.array.isRequired
}

export default DataTable
