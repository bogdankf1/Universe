export const APP = {
  BASE_PATH: '/',
  HOME: '/home',
  LOGIN: '/login',
  REGISTER: '/register',
  NEWS: '/news',
  IPO_CALENDAR: '/ipo-calendar'
}

export const TOOLS_BASE_PATH = `${APP.BASE_PATH}tools`
export const SYMBOLS_BASE_PATH = `${APP.BASE_PATH}symbols`

export const TOOLS = {
  BASE_PATH: `${TOOLS_BASE_PATH}`,
  TOOL: `${TOOLS_BASE_PATH}/tool/:tool?`,
  STOCKS: `${TOOLS_BASE_PATH}/tool/stocks`,
  INDICES: `${TOOLS_BASE_PATH}/tool/indices`,
  INDICES_FUTURES: `${TOOLS_BASE_PATH}/tool/indices-futures`,
  CURRENCIES: `${TOOLS_BASE_PATH}/tool/currencies`,
  CRYPTOCURRENCIES: `${TOOLS_BASE_PATH}/tool/cryptocurrencies`,
  COMMODITIES: `${TOOLS_BASE_PATH}/tool/commodities`,
}

export const SYMBOLS = {
  STOCKS: `${SYMBOLS_BASE_PATH}/stocks`
}

export const ROUTES = {
  APP,
  TOOLS,
  SYMBOLS
}