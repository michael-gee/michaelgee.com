import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'

import makeData from './makeData'

import './DataTable.css'

const DataTable = props => {
  const data = useMemo(() => makeData(500))
  const columns = _generateTableColumns()

  const instance = useTable(
    {
      data,
      columns
    },
    useSortBy
  )

  const { getTableProps, headerGroups, rows, prepareRow } = instance

  return (
    <div id="rs-dataTable" {...getTableProps()}>
      {headerGroups.map(headerGroup => {
        return (
          <div id="rs-dataTable-header-container" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              console.log(column)
              return (
                <div className="rs-dataTable-header" {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
                  <span>{column.sorted ? (column.sortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </div>
              )
            })}
          </div>
        )
      })}

      <div id="rs-dataTable-bodya">
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
      </div>
    </div>
  )
}

function _generateTableColumns() {
  return useMemo(() => [
    { Header: 'Row Index', accessor: (row, index) => index, width: 100 },
    {
      Header: 'First Name',
      accessor: 'firstName',
      minWidth: 140,
      maxWidth: 200
      // Filter: header => {
      //   return (
      //     <input
      //       placeholder='Search...  eg. "room"...'
      //       value={header.filterValue || ''}
      //       onChange={e => header.setFilter(e.target.value)}
      //     />
      //   )
      // }
    },
    {
      Header: 'Last Name',
      id: 'lastName',
      accessor: d => d.lastName,
      minWidth: 140,
      maxWidth: 200
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 100,
      aggregate: 'average'
    },
    {
      Header: 'Visits',
      accessor: 'visits',
      width: 100,
      aggregate: 'sum'
    },
    {
      Header: 'Profile Progress',
      accessor: 'progress',
      aggregate: 'average',
      minWidth: 200,
      Cell: row => (
        <div
          style={{
            width: `${row.value}%`,
            minWidth: '5px',
            height: '20px',
            backgroundColor: `hsla(${row.value}, 100%, 45%, 1)`,
            borderRadius: '2px',
            transition: 'all .4s ease'
          }}
        />
      )
    },
    {
      Header: 'Status',
      accessor: 'status',
      width: 150,
      Cell: row => (
        <span>
          <span
            style={{
              color: row.value === 'relationship' ? '#ff2e00' : row.value === 'complicated' ? '#ffbf00' : '#57d500',
              transition: 'all .5s ease'
            }}
          >
            &#x25cf;
          </span>{' '}
          {row.value === 'relationship' ? 'Relationship' : row.value === 'complicated' ? `Complicated` : 'Single'}
        </span>
      )
    }
  ])
}

export default DataTable
