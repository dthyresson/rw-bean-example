import BeansLayout from 'src/layouts/BeansLayout'
import BeanCell from 'src/components/BeanCell'
import NewComment from 'src/components/NewComment'

const BeanPage = ({ id }) => {
  return (
    <BeansLayout>
      <BeanCell id={id} />
      <NewComment beanId={id} />
    </BeansLayout>
  )
}

export default BeanPage
