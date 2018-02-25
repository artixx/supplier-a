import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'material-ui'

import {
  testChangeValue,
  testChangeValueAsync,
  testRequest,
} from 'src/actions/testActions'

export class TestBlock extends Component {
  static propTypes = {
    testChangeValue: PropTypes.func.isRequired,
    testChangeValueAsync: PropTypes.func.isRequired,
    testRequest: PropTypes.func.isRequired,
    value: PropTypes.any,
    valueAsync: PropTypes.any,
    request: PropTypes.any,
    requestState: PropTypes.any,
  }

  static defaultProps = {
    value: null,
    valueAsync: null,
    request: null,
    requestState: null,
  }

  _handleAdd = () => {
    const { testChangeValue } = this.props

    testChangeValue(1)
  }

  _handleSubtract = () => {
    const { testChangeValue } = this.props

    testChangeValue(-1)
  }

  _handleAddAsync = () => {
    const { testChangeValueAsync } = this.props

    testChangeValueAsync(1)
  }

  _handleSubtractAsync = () => {
    const { testChangeValueAsync } = this.props

    testChangeValueAsync(-1)
  }

  _handleRequest = () => {
    const { testRequest } = this.props

    testRequest()
  }

  render() {
    const { value, valueAsync, request, requestState } = this.props

    const style1 = { whiteSpace: 'pre' }

    return (
      <div>
        TEST BLOCK
        <div>
          {value}
          <Button variant="raised" color="primary" onClick={this._handleAdd}>+</Button>
          <Button variant="raised" color="primary" onClick={this._handleSubtract}>-</Button>
        </div>

        <div>
          {valueAsync}
          <Button variant="raised" color="primary" onClick={this._handleAddAsync}>+ async</Button>
          <Button variant="raised" color="primary" onClick={this._handleSubtractAsync}>- async</Button>
        </div>

        <div className="menu_link">
          <div style={style1}>
            Current request state is:
            {requestState.get('initial') && 'Initial'}
            {requestState.get('pending') && 'Pending'}
            {requestState.get('completed') && 'Completed'}
            {requestState.get('failed') && 'Failed'}
          </div>
          <div style={style1}>
            Current request data is:
            {JSON.stringify(request, Object.getOwnPropertyNames(request), 4)}
          </div>
          <Button variant="raised" color="primary" onClick={this._handleRequest}>REQUEST</Button>
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    const value = state.getIn(['test', 'value'])
    const valueAsync = state.getIn(['test', 'valueAsync'])
    const request = state.getIn(['test', 'testRequest'])
    const requestState = state.getIn(['test', 'testRequestState'])

    return { value, valueAsync, request, requestState }
  },
  {
    testChangeValue,
    testChangeValueAsync,
    testRequest,
  },
)(TestBlock)
