import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_BEAN_MUTATION = gql`
  mutation DeleteBeanMutation($id: Int!) {
    deleteBean(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Bean = ({ bean }) => {
  const { addMessage } = useFlash()
  const [deleteBean] = useMutation(DELETE_BEAN_MUTATION, {
    onCompleted: () => {
      navigate(routes.beans())
      addMessage('Bean deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bean ' + id + '?')) {
      deleteBean({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Bean {bean.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{bean.id}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{bean.body}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{bean.username}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(bean.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBean({ id: bean.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(bean.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Bean
