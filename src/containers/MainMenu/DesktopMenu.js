import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Typography,
  Button,
  Tabs,
  Tab,
  Avatar,
  MuiThemeProvider,
} from 'material-ui'
import { NavLink } from 'react-router-dom'

const theme = outerTheme => ({
  ...outerTheme,
  overrides: {
    MuiTabs: {
      root: {
        background: outerTheme.palette.secondary.main,
      },
    },
    MuiTab: {
      rootPrimary: {
        color: outerTheme.palette.secondary.contrastText,
      },
    },
    MuiAvatar: {
      root: {
        marginRight: '16px',
      },
    },
  },
})

export default class DesktopMenu extends PureComponent {
  static propTypes = {
    path: PropTypes.object.isRequired,
  }

  render() {
    const { path } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button href="https://vk.com/2chnews" target="_blank">
              <Avatar>PN</Avatar>
              <Typography type="title">
                Двач Новости - Реклама
              </Typography>
            </Button>
            <Button>Login</Button>
          </div>
          <Tabs
            value={path}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Home" component={NavLink} to="/" value="/"/>
            <Tab label="Control panel" component={NavLink} to="/control-panel" value="/control-panel"/>
            <Tab label="Comments" component={NavLink} to="/comments" value="/comments"/>
            <Tab label="Test" component={NavLink} to="/test" value="/test"/>
            <Tab label="About" component={NavLink} to="/about" value="/about"/>
          </Tabs>
        </AppBar>
      </MuiThemeProvider>
    )
  }
}
