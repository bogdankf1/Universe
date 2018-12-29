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
    companyNews(id: $id) {
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