import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { MuiThemeProvider, Reboot, createMuiTheme } from 'material-ui'

import { checkProduction } from 'utils/index'
import { store, history } from 'src/redux/store'
import AboutPage from 'containers/Pages/AboutPage'
import CommentsPage from 'containers/Pages/CommentsPage'
import ControlPanelPage from 'containers/Pages/ControlPanelPage'
import HomePage from 'containers/Pages/HomePage'
import TestPage from 'containers/Pages/TestPage'
import MainMenu from 'containers/MainMenu/MainMenu'
import './App.less'

let DevTools = () => null
if (checkProduction()) {
  DevTools = require('components/DevTools/DevTools').default
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9cff57',
      main: '#64dd17',
      dark: '#1faa00',
      contrastText: '#000',
    },
    secondary: {
      light: '#484848',
      main: '#212121',
      dark: '#000',
      contrastText: '#fff',
    },
  },
})

const App = () => (
  <Provider store={store}>
    <div>
      <MuiThemeProvider theme={theme}>
        <Reboot/>
        <ConnectedRouter history={history}>
          <div>
            <MainMenu/>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/control-panel" component={ControlPanelPage}/>
              <Route path="/comments" component={CommentsPage}/>
              <Route path="/test" component={TestPage}/>
              <Route path="/about" component={AboutPage}/>
            </Switch>
          </div>
        </ConnectedRouter>
        <DevTools/>
      </MuiThemeProvider>
    </div>
  </Provider>
)

export default hot(module)(App)
