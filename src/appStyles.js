import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  '@global': {
    body: {
      padding: '0',
      margin: '0',
      fontSize: '62.5%',
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
      backgroundColor: '#EDF1F5'
    },

    h1: { fontSize: '3.2em' },
    h2: { fontSize: '2.4em' },
    h3: { fontSize: '1.87em' },
    h4: { fontSize: '1.6em' },
    h5: { fontSize: '1.33em' },
    h6: { fontSize: '1.2em' },

    p: { fontSize: '1.6em' }
  },

  appContainer: { padding: '12px 40px', paddingTop: 40 },
  appTitle: {
    textAlign: 'center',
    color: '#62DAFB',
    backgroundColor: '#424242',
    maxWidth: 1176,
    margin: '0 auto',
    padding: '10px 0',
    borderRadius: '3px'
  }
})
