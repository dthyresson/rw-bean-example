import { db } from 'src/lib/db'

export const beans = () => {
  return db.bean.findMany()
}

export const bean = ({ id }) => {
  return db.bean.findOne({
    where: { id },
  })
}

export const createBean = ({ input }) => {
  return db.bean.create({
    data: input,
  })
}

export const updateBean = ({ id, input }) => {
  return db.bean.update({
    data: input,
    where: { id },
  })
}

export const deleteBean = ({ id }) => {
  return db.bean.delete({
    where: { id },
  })
}

export const Bean = {
  comments: (_obj, { root }) =>
    db.bean.findOne({ where: { id: root.id } }).comments(),
}
