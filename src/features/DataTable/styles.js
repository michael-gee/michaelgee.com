import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    padding: '0 12px',
    backgroundColor: 'white',
    fontSize: '1.6em'
  },

  dataTable: {
    width: '100%',
    borderRadius: 5,
    color: '#212121',
    borderCollapse: 'collapse'
  },

  headerContainer: {
    textTransform: 'uppercase',
    borderBottom: ' 1px solid #ddd',

    '& th': {
      fontWeight: 400,
      padding: '20px 8px 4px'
    }
  },

  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerIcon: {
    color: '#cecece'
  },

  tableBody: {
    '& tr': {
      borderBottom: '1px solid #ddd',

      '&:hover': { backgroundColor: '#f5f5f5' },
      '& td': { padding: '6px 8px', paddingLeft: 16, lineHeight: 1.43 }
    }
  },

  rowFilter: {
    padding: '4px 0'
  }
})

// #rs - dataTable - header - container.rs - dataTable - header - content: hover.rs - dataTable - header - icon {
//   color: #000;
// }
