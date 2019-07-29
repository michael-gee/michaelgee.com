import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  '@global': {
    body: {
      padding: '0',
      margin: '0',
      fontSize: '62.5%',
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif'
    },

    h1: { fontSize: '3.2em' },
    h2: { fontSize: '2.4em' },
    h3: { fontSize: '1.87em' },
    h4: { fontSize: '1.6em' },
    h5: { fontSize: '1.33em' },
    h6: { fontSize: '1.2em' },

    p: { fontSize: '1.6em' }
  },

  appContainer: { padding: '12px 40px' },
  appTitle: { textAlign: 'center' }
})
