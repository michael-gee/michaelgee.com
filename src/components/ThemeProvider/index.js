import React from 'react'
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  }
})

const ThemeProvider = props => {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
}

export default ThemeProvider
