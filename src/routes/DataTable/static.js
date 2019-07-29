import React from 'react'

export default [
  {
    Header: 'First Name',
    accessor: 'firstName'
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
    accessor: d => d.lastName
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Visits',
    accessor: 'visits'
  },
  {
    Header: 'Profile Progress',
    accessor: 'progress',
    aggregate: 'average',
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
