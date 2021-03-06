import { Map } from 'immutable'
import { SET_USERNAME } from '../types/UserActionTypes'

const initialState = Map({
  username: ''
})

export default function user (state = initialState, action) {
  switch(action.type) {
    case SET_USERNAME:
      return state.merge({
        username: action.username
      })
    default:
      return state
  }
}
