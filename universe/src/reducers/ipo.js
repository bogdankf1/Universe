import { IPO } from '../constants/ActionTypes'

const initialState = {
  upcomingIPOs: {},
  todayIPOs: {},
  isTodayIPOs: false
}

export default function ipo(state = initialState, action) {
  switch (action.type) {
    case IPO.SAVE_TODAYS_LIST:
      return {...state, todayIPOs: action.payload}
    case IPO.SAVE_UPCOMINGS_LIST:
      return {...state, upcomingIPOs: action.payload}
    case IPO.SELECT_IPO_INTERVAL:
      return {...state, isTodayIPOs: action.payload}
    default:
      return state
  }
}