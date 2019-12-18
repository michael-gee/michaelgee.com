import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTable, useSortBy, useFilters, usePagination } from 'react-table'

import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SortIcon from '@material-ui/icons/SwapVertRounded'
import SortUpIcon from '@material-ui/icons/VerticalAlignTopRounded'
import SortDownIcon from '@material-ui/icons/VerticalAlignBottomRounded'
import SvgIcon from '@material-ui/core/SvgIcon'

import Pagination from './Pagination'

import { useStyles } from './styles'

const DataTable = props => {
  const { data } = props
  const columns = useMemo(() => props.columns, [props.columns])
  const classes = useStyles()

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
    <div className={classes.container}>
      <table {...getTableProps()} className={classes.dataTable}>
        {headerGroups.map(headerGroup => {
          return (
            <thead {...headerGroup.getHeaderGroupProps()} className={classes.headerContainer}>
              <tr>
                {headerGroup.headers.map(column => {
                  return (
                    <th key={column.id}>
                      <div {...column.getHeaderProps(column.getSortByToggleProps())} className={classes.headerContent}>
                        {column.render('Header')}
                        <span>{_renderSortIcon(column)}</span>
                      </div>

                      <div className={classes.rowFilter}>
                        {column.canFilter ? column.render('Filter') : <TextField disabled={true} />}
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>
          )
        })}

        <tbody className={classes.tableBody}>
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
      // @@@@@ style these Icons to appear lightgray (color in coreview poc) and black on hover & click
      return column.isSorted ? column.isSortedDesc ? <SortDownIcon /> : <SortUpIcon /> : <SortIcon />
    } else {
      return null
    }
  }

  function _renderDefaultFilter({ column: { filterValue, setFilter } }) {
    return (
      <TextField
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value || undefined)}
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="filter table row"
              // onClick={handleClickShowPassword}
              // onMouseDown={handleMouseDownPassword}
            >
              <SvgIcon fontSize="small">
                <path
                  fill="#0078d4"
                  d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z"
                />
              </SvgIcon>
            </IconButton>
          )
        }}
      />
    )
  }
}

DataTable.propTypes = {
  columns: PropTypes.array.isRequired
}

export default DataTable
