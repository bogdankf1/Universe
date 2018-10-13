import gql from 'graphql-tag'

export const loadStocksList = gql`
  query StocksList($id: String) {
    stocks(id: $id) {
      list
    }
  }
`

export const loadCompanyStocksChart = gql`
  query StocksChart($id: String) {
    stocksChart(id: $id) {
      list {
        date,
        open,
        high,
        low,
        close,
        volume,
        unadjustedClose,
        unadjustedVolume,
        change,
        changePercent,
        vwap,
        label,
        changeOverTime
      }
    }
  }
`

export const loadSymbolsList = gql`
  query SymbolsList {
    symbols {
      list {
      	symbol
      	isEnabled
      	name
        date
      	type
      	iexId
      } 
    }
  }
`