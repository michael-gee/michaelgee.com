import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '3.2em',
    color: '#62DAFB',
    backgroundColor: '#424242',
    maxWidth: 1154,
    margin: '0 auto',
    padding: '20px 24px',
    borderRadius: '3px'
  },

  headerIcon: {
    backgroundColor: '#62DAFB',
    color: '#424242',
    padding: 8,
    transition: '.5',

    '&:hover': { color: '#424242', backgroundColor: 'white' }
  },

  divHidden: {
    width: 40,
    height: 40
  }
})
