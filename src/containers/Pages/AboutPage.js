import React, { Component } from 'react'
import './AboutPage.less'

export default class AboutPage extends Component {
  render() {
    return (
      <div className="page-about">
        <h1>Будущий фронт-енд будущего приложеня по автоматизации заказа в группах рекламы.</h1>

        <p>
          ctrl-h - Скрыть тулзы<br/>ctrl-j - Поменять позицию<br/>ctrl-m - Следующий тулз.
        </p>

        <address>
          Связаться со мной <a href="mailto:artix.2a@gmail.comm">artix.2a@gmail.com</a>
          <br/>Github: <a href="https://github.com/artixx/supplier-a" rel="noopener noreferrer" target="_blank">https://github.com/artixx/supplier-a</a>
        </address>
      </div>
    )
  }
}
