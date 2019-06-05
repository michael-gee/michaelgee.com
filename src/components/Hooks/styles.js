import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  hooksCount: { fontSize: '1.8em', marginBottom: 12 },

  hooksCounterBtn: {
    margin: '10px 0',
    fontSize: '1.6em',

    '&:last-child': { marginLeft: '10px' },
    '&:hover': { cursor: 'pointer' }
  }
})
