import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '600px',
    margin: '40px auto',
    fontSize: '1.6em'
  },

  toDoInputField: {
    display: 'flex',
    marginTop: '40px'
  },

  noToDos: {
    textAlign: 'center'
  }
})
