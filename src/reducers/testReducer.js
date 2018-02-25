import * as CON from 'src/redux/constants'
import { Map, fromJS } from 'immutable'

const defaultState = new Map({
  value: 0,
  valueAsync: 0,
  testRequest: '',
  testRequestState: CON.INITIAL
})

export default (state = defaultState, action) => {
  const { type, payload, response, error } = action

  switch (type) {
  case CON.TEST_CHANGE_VALUE:
    return state
      .set('value', state.get('value') + payload.delta)

  case CON.TEST_REQUEST + CON.START:
    return state
      .set('testRequestState', CON.PENDING)
  case CON.TEST_REQUEST + CON.SUCCESS:
    return state
      .set('testRequestState', CON.COMPLETED)
      .set('testRequest', fromJS(response))
  case CON.TEST_REQUEST + CON.FAIL:
    return state
      .set('testRequestState', CON.FAILED)
      .set('testRequest', fromJS(error))

  case CON.TEST_CHANGE_VALUE_ASYNC + CON.SUCCESS:
    return state
      .set('valueAsync', state.get('valueAsync') + payload.delta)
  default:
    return state
  }
}
