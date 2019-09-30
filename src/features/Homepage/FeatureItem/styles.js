import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  cardContainer: {
    color: 'white',
    backgroundColor: '#424242',
    minWidth: 276,
    margin: '12px',
    userSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    WebkitUserSelect: 'none',

    '& .MuiCardHeader-subheader': {
      color: 'white'
    }
  },

  cardImage: {
    display: 'flex',
    maxWidth: 120,
    margin: '0 auto',
    pointerEvents: 'none'
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})
