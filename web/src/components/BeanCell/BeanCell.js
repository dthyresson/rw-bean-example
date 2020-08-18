import Bean from 'src/components/Bean'

export const QUERY = gql`
  query FIND_BEAN_BY_ID($id: Int!) {
    bean: bean(id: $id) {
      id
      body
      username
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Bean not found</div>

export const Success = ({ bean }) => {
  return <Bean bean={bean} />
}
