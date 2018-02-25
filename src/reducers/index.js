import { combineReducers } from 'redux-immutable'
import testReducer from 'src/reducers/testReducer'
import routerReducer from 'src/reducers/routerReducer'

export default combineReducers({
  router: routerReducer,
  test: testReducer,
})
