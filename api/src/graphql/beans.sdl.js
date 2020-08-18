export const schema = gql`
  type Bean {
    id: Int!
    body: String!
    username: String!
    comments: [Comment]!
    createdAt: DateTime!
  }

  type Query {
    beans: [Bean!]!
    bean(id: Int!): Bean
  }

  input CreateBeanInput {
    body: String!
    username: String!
  }

  input UpdateBeanInput {
    body: String
    username: String
  }

  type Mutation {
    createBean(input: CreateBeanInput!): Bean!
    updateBean(id: Int!, input: UpdateBeanInput!): Bean!
    deleteBean(id: Int!): Bean!
  }
`
