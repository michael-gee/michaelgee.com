import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  loadingContainer: {
    fontSize: '2em',
    maxWidth: 1000,
    margin: '0 auto'
  },

  loadingMessageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px 0'
  }
})
