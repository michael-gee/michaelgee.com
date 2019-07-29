import React from 'react'

export default [
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
    canSortBy: false,
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
    canSortBy: false,
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
]
