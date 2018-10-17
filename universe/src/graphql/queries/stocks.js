import gql from 'graphql-tag'

export const loadStocksList = gql`
  query StocksList($id: String) {
    stocks(id: $id) {
      list
    }
  }
`

export const loadCompanyStocksChart = gql`
  query StocksChart($id: String, $range: String) {
    stocksChart(id: $id, range: $range) {
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

export const loadCryptoCurrenciesData = gql`
  query CryptoCurrenciesData {
    cryptoCurrencies {
      list {
        askPrice,
        askSize,
        bidPrice,
        bidSize,
        calculationPrice,
        change,
        changePercent,
        close,
        closeTime,
        companyName,
        high,
        latestPrice,
        latestSource,
        latestTime,
        latestUpdate,
        latestVolume,
        low,
        open,
        openTime,
        previousClose,
        primaryExchange,
        sector,
        symbol
      }
    }
  }
`