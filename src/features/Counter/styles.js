import { makeStyles } from '@material-ui/styles'

import { RS_PALETTE } from '../../constants/theme'

export const useStyles = makeStyles({
  counterContainer: {
    color: 'white',
    backgroundColor: RS_PALETTE.tertiary,
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
    backgroundColor: RS_PALETTE.primary,
    color: RS_PALETTE.tertiary,
    transition: '.5',

    '&:hover': {
      backgroundColor: 'white',
      color: RS_PALETTE.primary
    }
  }
})
