import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    padding: '40px 0 40px 8px'
  },

  section: { minWidth: '33%' },

  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& button': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '.8em',
      padding: '10px 12px',
      color: '#337ab7',
      border: 'none',
      outline: 'none',

      '&:hover': { cursor: 'pointer', backgroundColor: '#f5f5f5' }
    }
  },

  disabled: {
    color: '#777 !important',
    '&:hover': { backgroundColor: 'white !important', cursor: 'not-allowed !important' }
  },

  pivot: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
})

// #rs - pagination button: hover, #rs - pagination - selected {
//   background - color: #f5f5f5;
// }
