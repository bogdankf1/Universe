import { AUTH } from '../constants/ActionTypes'

const initialState = {
  user: {}
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH.SAVE_LOGGED_IN_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}