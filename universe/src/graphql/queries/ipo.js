import gql from 'graphql-tag'

export const loadTodayIPOs = gql`
  query TodayIPOs {
    todayIPOs {
      list {
        rawData {
          address
          amount
          auditor
          businessDescription
          ceo
          city
          companyDescription
          companyName
          employees
          expectedDate
          market
          percentOffered
          phone
          priceHigh
          priceLow
          shareholderShares
          sharesOffered
          sharesOutstanding
          sharesOverAlloted
          state
          stockholderEquity
          symbol
          url
          useOfProceeds
          zip
        }
        viewData {
          Amount
          Company
          Expected
          Float
          Market
          Percent
          Price
          Shares
          Symbol
          quote {
            latestPrice
            changePercent
          }
        }
      }
    }
  }
`

export const loadUpcomingIPOs = gql`
  query UpcomingIPOs {
    upcomingIPOs {
      list {
        rawData {
          address
          amount
          auditor
          businessDescription
          ceo
          city
          companyDescription
          companyName
          employees
          expectedDate
          market
          percentOffered
          phone
          priceHigh
          priceLow
          shareholderShares
          sharesOffered
          sharesOutstanding
          sharesOverAlloted
          state
          stockholderEquity
          symbol
          url
          useOfProceeds
          zip
        }
        viewData {
          Amount
          Company
          Expected
          Float
          Market
          Percent
          Price
          Shares
          Symbol
          quote {
            latestPrice
            changePercent
          }
        }
      }
    }
  }
`