import { gql } from 'apollo-server'

const typeDefs = gql`
  type Order {
    id: ID!
    userId: String!
    productId: String!
    quantity: Int!
    status: String!
    created_at: String!
  }

  type Query {
    getOrdersByUser(userId: String!): [Order]
  }
`

export default typeDefs