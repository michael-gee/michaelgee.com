import React from 'react'

export default [
  {
    Header: 'First Name',
    accessor: 'firstName',
    filter: 'text'
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
    filter: 'text',
    accessor: d => d.lastName
  },
  {
    Header: 'Age',
    accessor: 'age',
    canFilter: false
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    canFilter: false
  },
  {
    Header: 'Status',
    accessor: 'status',
    canFilter: false,
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
