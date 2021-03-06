import { gql } from "graphql-modules";

export const User = gql`
  type User {
    id: Int!
    email: String!
    username: String!
    teams: [Team!]!
  }

  type Query {
    getUser(id: Int!): User!
    allUsers: [User!]!
  }

  type RegisterResponse {
    ok: Boolean!
    user: User
    errors: [Error!]
  }

  type LoginResponse {
    ok: Boolean!
    errors: [Error!]
    refreshToken: String
    token: String
  }
  # Creating the user
  type Mutation {
    register(
      username: String!
      email: String!
      password: String!
    ): RegisterResponse!
    login(email: String!, password: String!): LoginResponse!
  }
`;
