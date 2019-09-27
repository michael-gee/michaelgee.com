import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  cardContainer: {
    color: 'white',
    backgroundColor: '#424242',
    minWidth: 276,
    margin: '12px',
    userSelect: 'none'
  },

  cardImage: {
    display: 'flex',
    maxWidth: 180,
    margin: '0 auto',
    pointerEvents: 'none'
  }
})
