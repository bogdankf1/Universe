export const createConst = (actionName) => {
  return {
    REQUEST: `${actionName}.REQUEST`,
    SUCCESS: `${actionName}.SUCCESS`,
    FAILURE: `${actionName}.FAILURE`,
  }
}

export const TOOLS = {
  SET_TOOL_NAME: 'SET_TOOL_NAME',
  LOAD_STOCKS_LIST: createConst('LOAD_STOCKS_LIST'),
  SAVE_DEFAULT_STOCKS_NAMES_LIST: 'SAVE_DEFAULT_STOCKS_NAMES_LIST'
}

export const SYMBOLS = {
  SAVE_LIST: 'SAVE_LIST',
}