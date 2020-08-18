import { db } from 'src/lib/db'

export const beans = () => {
  return db.bean.findMany()
}

export const createBean = ({ input }) => {
  console.log(input)

  const bean = db.bean.create({
    data: {
      ...input,
    },
  })

  console.log(bean)
  return bean
}

export const Bean = {
  comments: (_obj, { root }) =>
    db.bean.findOne({ where: { id: root.id } }).comments(),
}
