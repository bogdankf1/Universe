import gql from 'graphql-tag'

export const loadNewsList = gql`
  query NewsList {
    news {
      list {
        datetime,
        headline,
        image,
        related,
        source,
        summary,
        url
      }
    }
  }
`

export const loadCompanyNewsList = gql`
  query CompanyNewsList($id: String) {
    news {
      list(id: $id) {
        datetime,
        headline,
        image,
        related,
        source,
        summary,
        url
      }
    }
  }
`