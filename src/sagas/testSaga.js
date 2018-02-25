import { delay } from 'redux-saga'
import { put, all, fork, take, call } from 'redux-saga/effects'
import * as api from 'src/api'

import * as C from 'src/redux/constants'

function * incrementAsync(payload) {
  yield delay(1000)
  yield put({
    type: C.TEST_CHANGE_VALUE_ASYNC + C.SUCCESS,
    payload,
  })
}

function * testRequest() {
  try {
    const response = yield call(api.getTest)
    yield put({
      type: C.TEST_REQUEST + C.SUCCESS,
      response,
    })
  } catch (error) {
    yield put({
      type: C.TEST_REQUEST + C.FAIL,
      error,
    })
  }
}

function * watchIncrementAsync() {
  while (true) {
    const { payload } = yield take(C.TEST_CHANGE_VALUE_ASYNC + C.START)
    yield fork(incrementAsync, payload)
  }
}

function * watchTestRequest() {
  while (true) {
    const { payload } = yield take(C.TEST_REQUEST + C.START)
    yield fork(testRequest, payload)
  }
}

export default function * testSaga() {
  yield all([
    fork(watchIncrementAsync),
    fork(watchTestRequest),
  ])
}
