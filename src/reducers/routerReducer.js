import { Map } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = new Map({
  locationBeforeTransitions: null,
})

export default (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.set('locationBeforeTransitions', action.payload)
  }

  return state
}
