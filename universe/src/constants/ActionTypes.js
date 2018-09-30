export const createConst = (actionName) => {
  return {
    REQUEST: `${actionName}.REQUEST`,
    SUCCESS: `${actionName}.SUCCESS`,
    FAILURE: `${actionName}.FAILURE`,
  }
}

export const STOCK_MARKET_TOOLS = {
  SET_TOOL_NAME: 'SET_TOOL_NAME',
  LOAD_STOCKS_LIST: createConst('LOAD_STOCKS_LIST'),
  SAVE_SYMBOLS_LIST: 'SAVE_SYMBOLS_LIST'
}