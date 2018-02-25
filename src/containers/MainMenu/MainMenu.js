import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Hidden } from 'material-ui'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import { withRouter } from 'react-router-dom'

@withRouter
export default class MainMenu extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  render() {
    const { history } = this.props
    const path = history.location.pathname

    return (
      <div>
        <Hidden xsDown>
          <DesktopMenu path={path}/>
        </Hidden>
        <Hidden smUp>
          <MobileMenu path={path}/>
        </Hidden>
      </div>
    )
  }
}
