import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '600px',
    margin: '32px auto',
    fontSize: '1.6em'
  },

  noToDos: {
    textAlign: 'center'
  }
})
