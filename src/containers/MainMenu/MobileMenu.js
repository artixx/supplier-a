import React, { PureComponent } from 'react'
import {
  AppBar,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  Divider,
  Avatar,
  Typography,
  Button,
  MuiThemeProvider,
} from 'material-ui'
import { Menu } from 'material-ui-icons'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const theme = outerTheme => ({
  ...outerTheme,
  overrides: {
    MuiDrawer: {
      paper: {
        background: outerTheme.palette.secondary.main,
      },
    },
    MuiMenuItem: {
      root: {
        color: outerTheme.palette.secondary.contrastText,
        whiteSpace: 'normal',
        height: null,
      },
      selected: {
        color: outerTheme.palette.primary.main,
      },
    },
    MuiTypography: {
      title: {
        color: outerTheme.palette.primary.main,
      },
    },
    MuiAvatar: {
      root: {
        marginRight: '16px',
      },
    },
    MuiAppBar: {
      root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
  },
})

export default class MobileMenu extends PureComponent {
  static propTypes = {
    path: PropTypes.object.isRequired,
  }

  state = {
    isDrawerOpen: false,
  }

  _closeDrawer = () => {
    this.setState({ isDrawerOpen: false })
  }

  _openDrawer = () => {
    this.setState({ isDrawerOpen: true })
  }

  render() {
    const { path } = this.props
    const { isDrawerOpen } = this.state

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="sticky">
          <IconButton onClick={this._openDrawer} aria-label="Menu">
            <Menu/>
          </IconButton>
          <Button>Login</Button>
          <Drawer open={isDrawerOpen} onClose={this._closeDrawer}>
            <div
              tabIndex={0}
              role="button"
              onClick={this._closeDrawer}
              onKeyDown={this._closeDrawer}
            >
              <MenuList disablePadding>
                <MenuItem size="small" component={Button} href="https://vk.com/2chnews" target="_blank">
                  <Avatar>PN</Avatar>
                  <Typography type="title">
                    Двач Новости - Реклама
                  </Typography>
                </MenuItem>
                <Divider/>
                <MenuItem button selected={path === '/'} component={NavLink} to="/">
                  Home
                </MenuItem>
                <MenuItem button selected={path === '/control-panel'} component={NavLink} to="/control-panel">
                  Control panel
                </MenuItem>
                <MenuItem button selected={path === '/comments'} component={NavLink} to="/comments">
                  Comments
                </MenuItem>
                <MenuItem button selected={path === '/test'} component={NavLink} to="/test">
                  Test
                </MenuItem>
                <MenuItem button selected={path === '/about'} component={NavLink} to="/about">
                  About
                </MenuItem>
              </MenuList>
            </div>
          </Drawer>
        </AppBar>
      </MuiThemeProvider>
    )
  }
}
