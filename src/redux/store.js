import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { Map } from 'immutable'

import { checkProduction } from 'utils'
import reducer from 'reducers'
import saga from 'sagas'

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()

const enhancers = [
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
  ),
]

if (checkProduction()) {
  const { persistState } = require('redux-devtools')
  const DevTools = require('src/components/DevTools/DevTools').default
  const getDebugSessionKey = () => {
    const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
    return (matches && matches.length > 0) ? matches[1] : null
  }
  enhancers.push(DevTools.instrument(), persistState(getDebugSessionKey()))
}

function configureStore() {
  const store = createStore(reducer, new Map(), compose(...enhancers))

  let sagaTask = sagaMiddleware.run(saga)

  // HMR support for reducers and sagas
  if (module.hot) {
    module.hot.accept('../reducers/', () => {
      const nextReducer = require('../reducers/index').default
      store.replaceReducer(nextReducer)
    })

    module.hot.accept('../sagas', () => {
      const getNewSagas = require('../sagas/index').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(function * () {
          yield getNewSagas()
        })
      })
    })
  }

  return store
}

export const store = configureStore()
