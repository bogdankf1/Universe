import gql from 'graphql-tag'

export const loadStocksList = gql`
  query StocksList($id: String) {
    stocks(id: $id) {
      list
    }
  }
`