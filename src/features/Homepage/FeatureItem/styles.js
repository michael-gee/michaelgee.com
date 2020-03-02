import { makeStyles } from '@material-ui/styles'

import { RS_PALETTE } from 'constants/theme'

export const useStyles = makeStyles({
  cardContainer: {
    color: 'white',
    backgroundColor: RS_PALETTE.tertiary,
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
    backgroundColor: RS_PALETTE.primary,
    color: RS_PALETTE.tertiary
  }
})
