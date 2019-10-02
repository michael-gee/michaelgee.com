import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  counterContainer: {
    color: 'white',
    backgroundColor: '#424242',
    margin: '24px 0',
    padding: '40px 0',
    textAlign: 'center'
  },

  counterCount: { fontSize: '2em', marginBottom: 12 },

  counterBtn: {
    margin: '10px 0',
    fontSize: '1.6em',

    '&:last-child': { marginLeft: '10px' },
    '&:hover': { cursor: 'pointer' }
  },

  incrementBtn: {
    backgroundColor: '#62DAFB',
    color: '#424242',
    transition: '.5',

    '&:hover': {
      backgroundColor: 'white',
      color: '#424242'
    }
  }
})
