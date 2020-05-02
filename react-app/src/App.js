import React from 'react';
import './App.css';
import Test from './components/test.tsx'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme/theme.ts'
import { Helmet } from 'react-helmet'

const App = () => (
  <MuiThemeProvider theme={theme}>
    {/* <Provider store={store}>
      <Router history={appHistory} routes={Routes} />
    </Provider> */}
    <div className="App">
      <header>
        <Helmet><title>{ 'Hack the Institute' }</title></Helmet>
      </header>
      <body>
        <Test />
      </body>
    </div>
  </MuiThemeProvider>
)

export default App
