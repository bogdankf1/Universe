import gql from 'graphql-tag'

export const loadStocksList = gql`
  query StocksList($id: String) {
    stocks(id: $id) {
      list
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