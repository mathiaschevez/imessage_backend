const typeDefs = `#graphql
  type User {
    id: String,
    username: String,
  }

  type Query {
    users: [User]
    searchUsers(username: String): [User]
  }

  type Mutation {
    createUsername(username: String): CreateUsernameResponse
  }

  type CreateUsernameResponse {
    success: Boolean,
    error: String,
  }
`

export default typeDefs
