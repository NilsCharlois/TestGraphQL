const { gql } = require('apollo-server')

const typeDefs = gql`type User {
    id: Int!
    name: String!
    email: String!
    recipes: [Recipe!]!
  }

  type Recipe {
    id: Int!
    title: String!
    steeptime: String!
    user: User!
  }

  type Query {
    user(id: Int!): User
    allRecipes: [Recipe!]!
    recipe(id: Int!): Recipe
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createRecipe(
      UserId: Int!
      title: String!
      steeptime: String!
    ): Recipe!
  }
`

module.exports = typeDefs
