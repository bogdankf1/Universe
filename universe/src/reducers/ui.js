import { UI } from '../constants/ActionTypes'

const initialState = {
  mobileMenu: {
    visible: false
  },
  predictionPopup: {
    visible: false
  }
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case UI.MOBILE_MENU_SHOW:
      return { ...state, mobileMenu: { visible: true } }
    case UI.MOBILE_MENU_HIDE:
      return { ...state, mobileMenu: { visible: false } }
    case UI.PREDICTION_POPUP_SHOW:
      return { ...state, predictionPopup: { visible: true } }
    case UI.PREDICTION_POPUP_HIDE:
      return { ...state, predictionPopup: { visible: false } }
    default:
      return state
  }
}