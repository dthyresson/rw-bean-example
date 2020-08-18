export const schema = gql`
  type Comment {
    id: Int!
    body: String!
    beanId: Int!
    bean: Bean!
    username: String!
    createdAt: DateTime!
  }

  type Query {
    comments: [Comment!]!
    comment(id: Int!): Comment
  }

  input CreateCommentInput {
    body: String!
    beanId: Int!
    username: String!
  }

  input UpdateCommentInput {
    body: String
    beanId: Int
    username: String
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment!
    updateComment(id: Int!, input: UpdateCommentInput!): Comment!
    deleteComment(id: Int!): Comment!
  }
`
