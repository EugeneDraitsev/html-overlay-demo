import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledProvider } from 'styled-components/macro'

import App from './App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <StyledProvider theme={theme}>
          <App />
        </StyledProvider>
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
