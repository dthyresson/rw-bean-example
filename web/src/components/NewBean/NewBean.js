import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BeanForm from 'src/components/BeanForm'

const CREATE_BEAN_MUTATION = gql`
  mutation CreateBeanMutation($input: CreateBeanInput!) {
    createBean(input: $input) {
      id
    }
  }
`

const NewBean = () => {
  const { addMessage } = useFlash()
  const [createBean, { loading, error }] = useMutation(CREATE_BEAN_MUTATION, {
    onCompleted: () => {
      navigate(routes.beans())
      addMessage('Bean created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createBean({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Bean</h2>
      </header>
      <div className="rw-segment-main">
        <BeanForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBean
