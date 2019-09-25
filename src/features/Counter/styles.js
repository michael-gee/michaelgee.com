import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  counterContainer: {
    margin: '24px 0',
    padding: '12px 0',
    textAlign: 'center',
    border: '2px solid #3F51B5'
  },

  counterCount: { fontSize: '1.8em', marginBottom: 12 },

  counterBtn: {
    margin: '10px 0',
    fontSize: '1.6em',

    '&:last-child': { marginLeft: '10px' },
    '&:hover': { cursor: 'pointer' }
  }
})
