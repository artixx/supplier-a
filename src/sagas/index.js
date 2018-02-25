import { all, fork } from 'redux-saga/effects'

import testSaga from 'src/sagas/testSaga'

export default function * rootSaga() {
  yield all([
    fork(testSaga),
  ])
}
