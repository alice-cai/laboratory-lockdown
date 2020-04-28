import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto Mono',
      '"Open Sans"',
      'Lato',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  }
})
