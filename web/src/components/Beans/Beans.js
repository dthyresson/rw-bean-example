import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_BEAN_MUTATION = gql`
  mutation DeleteBeanMutation($id: Int!) {
    deleteBean(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const BeansList = ({ beans }) => {
  const { addMessage } = useFlash()
  const [deleteBean] = useMutation(DELETE_BEAN_MUTATION, {
    onCompleted: () => {
      addMessage('Bean deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bean ' + id + '?')) {
      deleteBean({ variables: { id }, refetchQueries: ['BEANS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Body</th>
            <th>Username</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {beans.map((bean) => (
            <tr key={bean.id}>
              <td>{truncate(bean.id)}</td>
              <td>{truncate(bean.body)}</td>
              <td>{truncate(bean.username)}</td>
              <td>{timeTag(bean.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.bean({ id: bean.id })}
                    title={'Show bean ' + bean.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBean({ id: bean.id })}
                    title={'Edit bean ' + bean.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete bean ' + bean.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(bean.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BeansList
