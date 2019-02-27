import textConstants from "./textConstants";
import { ROUTES } from "./routes";

export const TOOLS_NAMES = {
    STOCKS: 'STOCKS',
    INDICES: 'INDICES',
    INDICES_FUTURES: 'INDICES_FUTURES',
    CURRENCIES: 'CURRENCIES',
    CRYPTOCURRENCIES: 'CRYPTOCURRENCIES',
    COMMODITIES: 'COMMODITIES'
}

export const TOOLS_TYPES = [
    TOOLS_NAMES.STOCKS,
    TOOLS_NAMES.INDICES,
    TOOLS_NAMES.INDICES_FUTURES,
    TOOLS_NAMES.CURRENCIES,
    TOOLS_NAMES.CRYPTOCURRENCIES,
    TOOLS_NAMES.COMMODITIES
]

export const DEFAULT_LOADED_STOCKS = ['AAPL', 'MSFT', 'FB', 'TSLA', 'AMZN']

export const STOCKS_RANGES = ['5y', '2y', '1y', 'ytd', '6m', '3m', '1m', '1d', /*'date',*/ /*'dynamic'*/]

export const DEFAULT_STOCKS_RANGE = '1y'

export const PREDICTION_TRAINING_DAYS = [10, 20, 50, 100]

export const EPOCHS_AMOUNTS = [128, 256, 512, 1024, 2048, 4096]

export const IPO_SCHEDULE_FIELDS = ['COMPANY', 'SYMBOL', 'MARKET', 'PRICE', 'AMOUNT', 'EXPECTED']

export const MOBILE_MENU_ITEMS = [
  {
    title: textConstants.STOCK_MARKET,
    route: ROUTES.TOOLS.STOCKS
  },
  {
    title: textConstants.NEWS,
    route: ROUTES.APP.NEWS
  },
  {
    title: textConstants.IPO_CALENDAR,
    route: ROUTES.APP.IPO_CALENDAR
  },
  {
    title: textConstants.LOGIN,
    route: ROUTES.APP.LOGIN   
  },
  {
    title: textConstants.REGISTER,
    route: ROUTES.APP.REGISTER   
  }
]

export const CURRENCY_SIGN = '$'