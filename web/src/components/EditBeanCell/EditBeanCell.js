import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BeanForm from 'src/components/BeanForm'

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
const UPDATE_BEAN_MUTATION = gql`
  mutation UpdateBeanMutation($id: Int!, $input: UpdateBeanInput!) {
    updateBean(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ bean }) => {
  const { addMessage } = useFlash()
  const [updateBean, { loading, error }] = useMutation(UPDATE_BEAN_MUTATION, {
    onCompleted: () => {
      navigate(routes.beans())
      addMessage('Bean updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateBean({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Bean {bean.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BeanForm bean={bean} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
