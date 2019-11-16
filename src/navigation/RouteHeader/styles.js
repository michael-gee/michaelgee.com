import { makeStyles } from '@material-ui/styles'

import { RS_PALETTE } from '../../constants/theme'

export const useStyles = makeStyles({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '3.2em',
    color: RS_PALETTE.primary,
    backgroundColor: RS_PALETTE.tertiary,
    maxWidth: 1154,
    margin: '0 auto',
    padding: '20px 24px',
    borderRadius: '3px'
  },

  headerIcon: {
    backgroundColor: RS_PALETTE.primary,
    color: RS_PALETTE.tertiary,
    padding: 8,
    transition: '.5',

    '&:hover': { color: RS_PALETTE.tertiary, backgroundColor: 'white' }
  },

  divHidden: {
    width: 40,
    height: 40
  }
})
