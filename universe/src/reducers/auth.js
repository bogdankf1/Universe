import { AUTH } from '../constants/ActionTypes'

const initialState = {
  user: {},
  loginError: '',
  isLoggedIn: false,
  registerError: ''
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH.SAVE_LOGGED_IN_USER:
      return {
        ...state,
        user: action.payload,
        loginError: '',
        isLoggedIn: true
      }
    case AUTH.SET_LOGIN_ERROR_MESSAGE:
      return { ...state, loginError: action.payload }
    case AUTH.CLEAR_LOGIN_ERROR_MESSAGE:
      return { ...state, loginError: '' }
    case AUTH.LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false
      }
    case AUTH.SET_REGISTER_ERROR_MESSAGE:
      return { ...state, registerError: action.payload }
    case AUTH.CLEAR_REGISTER_ERROR_MESSAGE:
      return { ...state, registerError: '' }
    default:
      return state
  }
}