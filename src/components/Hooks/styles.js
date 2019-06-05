import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  hooksCount: { fontSize: '1.8em' },

  hooksCounterBtn: {
    margin: '10px 0',
    fontSize: '1.1em',
    backgroundColor: 'green',
    color: 'white',

    '&:hover': { cursor: 'pointer' },
    '&:last-child': { backgroundColor: 'red', marginLeft: '10px' }
  }
})
