import { Link, routes } from '@redwoodjs/router'

import Beans from 'src/components/Beans'

export const QUERY = gql`
  query BEANS {
    beans {
      id
      body
      username
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No beans yet. '}
      <Link to={routes.newBean()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ beans }) => {
  return <Beans beans={beans} />
}
