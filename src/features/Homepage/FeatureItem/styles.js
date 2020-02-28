import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  cardContainer: {
    color: 'white',
    backgroundColor: 'red',
    width: 276,
    margin: '12px',
    userSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',

    '& .MuiCardHeader-subheader': {
      color: 'white'
    }
  },

  cardAvatar: {
    backgroundColor: 'white',
    color: 'red'
  }
})
