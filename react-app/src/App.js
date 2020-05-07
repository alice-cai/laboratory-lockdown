import React from 'react';
import './App.css';
import GameContainer from './components/game-container.component.tsx'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme/theme.ts'
import { Helmet } from 'react-helmet'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div className="App">
      <header>
        <Helmet><title>{ 'Laboratory Lockdown' }</title></Helmet>
      </header>
      <body>
        <GameContainer />
      </body>
    </div>
  </MuiThemeProvider>
)

export default App
