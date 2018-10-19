import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#58595B',
      main: '#2C2D2E',
      dark: '#213441',
      darkText: 'rgba(0, 0, 0, 0.54)',
    },
    secondary: {
      light: '#ffffff',
      main: '#7E7F81',
      dark: '#7D7F81',
      contrastText: '#000',
    },
  },
})

export default theme