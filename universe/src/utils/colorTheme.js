import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#212121',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})

export default theme