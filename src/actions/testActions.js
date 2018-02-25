import * as CON from 'src/redux/constants'

export function testChangeValue(delta = 0) {
  return {
    type: CON.TEST_CHANGE_VALUE,
    payload: {
      delta,
    },
  }
}

export function testChangeValueAsync(delta = 0) {
  return {
    type: CON.TEST_CHANGE_VALUE_ASYNC + CON.START,
    payload: {
      delta,
    },
  }
}

export function testRequest() {
  return {
    type: CON.TEST_REQUEST + CON.START,
  }
}
