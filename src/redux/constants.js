import { Map } from 'immutable'

export const START = '_START'
export const SUCCESS = '_SUCCESS'
export const FAIL = '_FAIL'

export const TEST_CHANGE_VALUE = 'TEST_CHANGE_VALUE'
export const TEST_CHANGE_VALUE_ASYNC = 'TEST_CHANGE_VALUE_ASYNC'
export const TEST_REQUEST = 'TEST_REQUEST'

export const INITIAL = new Map({
  initial: true,
  pending: false,
  completed: false,
  failed: false,
})

export const PENDING = new Map({
  initial: false,
  pending: true,
  completed: false,
  failed: false,
})

export const COMPLETED = new Map({
  initial: false,
  pending: false,
  completed: true,
  failed: false,
})

export const FAILED = new Map({
  initial: false,
  pending: false,
  completed: false,
  failed: true,
})
